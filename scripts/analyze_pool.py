import json
import urllib.request
import re

with open("scripts/parsed_nodes.json", "r", encoding="utf-8") as f:
    nodes = json.load(f)

print(f"Total nodes to analyze: {len(nodes)}")

# Country and type classification
country_stats = {}
type_stats = {}
cf_worker_count = 0
aws_count = 0

analyzed = []

for n in nodes:
    name = n.get("name", "")
    server = n.get("server", "")
    ptype = n.get("type", "")
    
    # Detect country from name prefix or code
    country = "Unknown"
    flag = "🌐"
    if "HK" in name or "-HK-" in name:
        country, flag = "Hong Kong", "🇭🇰"
    elif "US" in name or "-US-" in name:
        country, flag = "United States", "🇺🇸"
    elif "JP" in name or "-JP-" in name:
        country, flag = "Japan", "🇯🇵"
    elif "SG" in name or "-SG-" in name:
        country, flag = "Singapore", "🇸🇬"
    elif "DE" in name or "-DE-" in name:
        country, flag = "Germany", "🇩🇪"
    elif "FR" in name or "-FR-" in name:
        country, flag = "France", "🇫🇷"
    elif "CA" in name or "-CA-" in name:
        country, flag = "Canada", "🇨🇦"
    elif "AU" in name or "-AU-" in name:
        country, flag = "Australia", "🇦🇺"
    elif "KR" in name or "-KR-" in name:
        country, flag = "South Korea", "🇰🇷"
    elif "CH" in name or "-CH-" in name:
        country, flag = "Switzerland", "🇨🇭"
    elif "PL" in name or "-PL-" in name:
        country, flag = "Poland", "🇵🇱"
    elif "SE" in name or "-SE-" in name:
        country, flag = "Sweden", "🇸🇪"
    elif "TH" in name or "-TH-" in name:
        country, flag = "Thailand", "🇹🇭"
    elif "IN" in name or "-IN-" in name:
        country, flag = "India", "🇮🇳"

    # Detect infrastructure / ASN type
    asn_type = "Commercial Datacenter"
    is_cf = False
    is_aws = False
    
    if server.startswith("104.21.") or server.startswith("104.26.") or server.startswith("162.159.") or server.startswith("104.17."):
        asn_type = "Cloudflare Warp / CDN"
        is_cf = True
        cf_worker_count += 1
    elif server.startswith("52.") or server.startswith("13.") or server.startswith("3.") or server.startswith("54.") or server.startswith("15."):
        asn_type = "AWS EC2 Datacenter"
        is_aws = True
        aws_count += 1
    elif server.startswith("138.2."):
        asn_type = "Oracle Cloud Infrastructure"
    elif server.startswith("91.193.58."):
        asn_type = "HK Datacenter BGP"

    # Capability heuristic matrix based on edge detection rules
    # 1. Antigravity 2:
    # Requires: Supported region (US, JP, SG, CA, AU, UK, DE, FR, etc. NOT HK, CN, RU)
    # AND Datacenter penalty: Cloudflare Workers and saturated AWS pools often fail with 400 location error.
    # High-potential candidates: Dedicated US/JP/SG non-CF nodes.
    antigravity_viable = False
    claude_viable = False
    openai_viable = False
    
    if country in ["United States", "Japan", "Singapore", "Canada", "Australia", "Germany", "United Kingdom", "France"]:
        if not is_cf: # Non-Cloudflare worker has much higher Antigravity pass rate
            antigravity_viable = True
            claude_viable = True
        openai_viable = True
    elif country == "Hong Kong":
        # HK is strictly barred by Anthropic, OpenAI official, and Google Antigravity
        antigravity_viable = False
        claude_viable = False
        openai_viable = False

    country_stats[country] = country_stats.get(country, 0) + 1
    type_stats[ptype] = type_stats.get(ptype, 0) + 1

    analyzed.append({
        "name": name,
        "country": country,
        "flag": flag,
        "server": server,
        "port": n.get("port"),
        "type": ptype,
        "asn_type": asn_type,
        "antigravity_viable": antigravity_viable,
        "claude_viable": claude_viable,
        "openai_viable": openai_viable,
    })

print("\n--- Country Distribution ---")
for c, cnt in sorted(country_stats.items(), key=lambda x: -x[1]):
    print(f"  {c}: {cnt} nodes")

print(f"\n--- Infrastructure Types ---")
print(f"  Cloudflare Worker VLESS Nodes: {cf_worker_count}")
print(f"  AWS EC2 Nodes: {aws_count}")
print(f"  Other Datacenter / BGP: {len(nodes) - cf_worker_count - aws_count}")

print(f"\n--- Antigravity Viability Prediction ---")
viable_anti = [x for x in analyzed if x["antigravity_viable"]]
print(f"  Estimated Antigravity viable nodes: {len(viable_anti)} / {len(nodes)}")
print("  Sample Antigravity viable candidates:")
for x in viable_anti[:10]:
    print(f"    - {x['flag']} {x['name']} ({x['server']}:{x['port']}) [{x['asn_type']}]")

with open("scripts/analyzed_summary.json", "w", encoding="utf-8") as f:
    json.dump({
        "total": len(nodes),
        "countries": country_stats,
        "protocols": type_stats,
        "cf_worker_count": cf_worker_count,
        "aws_count": aws_count,
        "antigravity_candidates_count": len(viable_anti),
        "nodes": analyzed
    }, f, indent=2, ensure_ascii=False)
