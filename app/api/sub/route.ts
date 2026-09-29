import { NextRequest, NextResponse } from 'next/server';
import { INITIAL_NODES } from '@/lib/mock-nodes';
import { generateClashYaml, generateSingBoxJson, generateShadowsocksBase64 } from '@/lib/generators';
import { CapabilityTag } from '@/lib/types';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const format = searchParams.get('format') || 'clash';
  const filter = searchParams.get('filter') || 'all';
  const tun = searchParams.get('tun') !== 'false';
  const blockIpv6 = searchParams.get('blockIpv6') !== 'false';

  // Filter nodes
  let nodes = [...INITIAL_NODES];
  if (filter === 'antigravity') {
    nodes = nodes.filter((n) => n.capabilities.Antigravity?.supported);
  } else if (filter === 'ai') {
    nodes = nodes.filter(
      (n) =>
        n.capabilities.Antigravity?.supported ||
        n.capabilities.ClaudeCode?.supported ||
        n.capabilities.OpenAI?.supported
    );
  }

  const tunOptions = {
    enableTun: tun,
    blockIpv6: blockIpv6,
    fakeIpMode: true,
    dnsHijack: true,
    fallbackInterval: 180,
    minCapabilities: filter === 'antigravity' ? (['Antigravity'] as CapabilityTag[]) : [],
    subscriptionName: 'NodeMatrix-Subscription',
  };

  if (format === 'singbox') {
    const jsonStr = generateSingBoxJson(nodes, tunOptions);
    return new NextResponse(jsonStr, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Subscription-Userinfo': 'upload=1024; download=20480; total=107374182400; expire=1799999999',
        'Cache-Control': 'public, max-age=600',
      },
    });
  }

  if (format === 'ss') {
    const { base64 } = generateShadowsocksBase64(nodes);
    return new NextResponse(base64, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Subscription-Userinfo': 'upload=1024; download=20480; total=107374182400; expire=1799999999',
        'Cache-Control': 'public, max-age=600',
      },
    });
  }

  // Default Clash / Mihomo YAML
  const yamlContent = generateClashYaml(nodes, tunOptions);
  return new NextResponse(yamlContent, {
    headers: {
      'Content-Type': 'text/yaml; charset=utf-8',
      'Content-Disposition': 'inline; filename="nodematrix_clash.yaml"',
      'Subscription-Userinfo': 'upload=1024; download=20480; total=107374182400; expire=1799999999',
      'Cache-Control': 'public, max-age=600',
    },
  });
}
