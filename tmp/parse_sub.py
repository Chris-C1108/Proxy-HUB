import re
import json

with open("/tmp/sub.txt", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

lines = content.splitlines()
in_proxies = False
nodes = []
current = None

for line in lines:
    if line.strip().startswith("proxies:"):
        in_proxies = True
        continue
    if in_proxies and line.strip().startswith("proxy-groups:"):
        break
    if in_proxies:
        match_name = re.match(r"^\s*-\s+name:\s*(.+)$", line)
        if match_name:
            if current:
                nodes.append(current)
            current = {"name": match_name.group(1).strip().strip("\"'")}
        elif current:
            kv = re.match(r"^\s+([a-zA-Z0-9_\-]+):\s*(.+)$", line)
            if kv:
                k, v = kv.group(1), kv.group(2).strip().strip("\"'")
                current[k] = v

if current:
    nodes.append(current)

print(f"Total parsed nodes: {len(nodes)}")
for i, n in enumerate(nodes):
    print(f"[{i+1:02d}] {n.get('name')} | Type: {n.get('type')} | Host: {n.get('server')}:{n.get('port')}")

with open("/tmp/parsed_nodes.json", "w", encoding="utf-8") as f:
    json.dump(nodes, f, indent=2, ensure_ascii=False)
