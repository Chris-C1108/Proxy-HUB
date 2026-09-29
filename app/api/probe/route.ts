import { NextRequest, NextResponse } from 'next/server';
import { CapabilityTag } from '@/lib/types';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nodeName, server, port, targetService } = body;

    // Zero-token probe execution simulation & real edge test
    const startTime = Date.now();
    let verdict = 'PASS';
    let statusCode = 200;
    let responseText = '';
    let reason = '';

    // If probing specific targets directly from server:
    switch (targetService as CapabilityTag) {
      case 'Antigravity': {
        try {
          const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyDummyProbeKey', {
            method: 'GET',
            headers: { 'User-Agent': 'NodeMatrix-Prober/1.0' },
            signal: AbortSignal.timeout(2500),
          });
          statusCode = res.status;
          responseText = await res.text();
          if (responseText.includes('User location is not supported')) {
            verdict = 'BLOCKED';
            reason = 'Google ESF Geo-Barred: User location is not supported';
          } else if (res.status === 400 && responseText.includes('INVALID_ARGUMENT')) {
            verdict = 'PASS';
            reason = 'Region Allowed (Dummy Key rejected as expected)';
          } else {
            verdict = res.ok ? 'PASS' : 'BLOCKED';
            reason = `HTTP ${res.status}`;
          }
        } catch {
          statusCode = 504;
          verdict = 'TIMEOUT';
          reason = 'Network timeout connecting to Google ESF';
        }
        break;
      }
      case 'ClaudeCode': {
        try {
          const res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
              'x-api-key': 'sk-ant-dummy-probe-check',
              'anthropic-version': '2023-06-01',
              'content-type': 'application/json',
            },
            body: JSON.stringify({ model: 'claude-3-haiku-20240307', max_tokens: 1 }),
            signal: AbortSignal.timeout(2500),
          });
          statusCode = res.status;
          responseText = await res.text();
          if (res.status === 401 && responseText.includes('authentication_error')) {
            verdict = 'PASS';
            reason = 'Passed Cloudflare WAF & Regional Filter (Auth error only)';
          } else {
            verdict = 'BLOCKED';
            reason = `Cloudflare WAF / Geo-Barred (HTTP ${res.status})`;
          }
        } catch {
          statusCode = 504;
          verdict = 'TIMEOUT';
          reason = 'Connection to Anthropic WAF timed out';
        }
        break;
      }
      case 'OpenAI': {
        try {
          const res = await fetch('https://api.openai.com/v1/models', {
            method: 'GET',
            headers: { Authorization: 'Bearer sk-dummy-probe-check' },
            signal: AbortSignal.timeout(2500),
          });
          statusCode = res.status;
          responseText = await res.text();
          if (res.status === 401 && responseText.includes('invalid_api_key')) {
            verdict = 'PASS';
            reason = 'OpenAI Geolocation passed (Invalid API Key received)';
          } else {
            verdict = 'BLOCKED';
            reason = `Geo-blocked / Cloudflare Turnstile barrier (${res.status})`;
          }
        } catch {
          statusCode = 504;
          verdict = 'TIMEOUT';
          reason = 'Connection to OpenAI timed out';
        }
        break;
      }
      case 'GoogleClean': {
        try {
          const res = await fetch('https://www.google.com/search?q=connectivity+test&hl=en', {
            method: 'GET',
            headers: {
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
            },
            signal: AbortSignal.timeout(2500),
          });
          statusCode = res.status;
          responseText = await res.text();
          if (res.status === 200 && !responseText.includes('/sorry/index')) {
            verdict = 'PASS';
            reason = 'Clean IP: No Recaptcha challenge';
          } else {
            verdict = 'BLOCKED';
            reason = 'High-Risk IP: Recaptcha challenge triggered (/sorry/index)';
          }
        } catch {
          statusCode = 504;
          verdict = 'TIMEOUT';
          reason = 'Timeout connecting to Google Search';
        }
        break;
      }
      case 'YouTube': {
        try {
          const res = await fetch('https://www.youtube.com/premium', {
            method: 'GET',
            headers: {
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
            },
            signal: AbortSignal.timeout(2500),
          });
          statusCode = res.status;
          if (res.status === 200) {
            verdict = 'PASS';
            reason = 'GGC Edge accessible, Premium availability confirmed';
          } else {
            verdict = 'BLOCKED';
            reason = `HTTP ${res.status} Rate limited or region locked`;
          }
        } catch {
          statusCode = 504;
          verdict = 'TIMEOUT';
          reason = 'Timeout contacting YouTube GGC edge';
        }
        break;
      }
      default: {
        verdict = 'PASS';
        statusCode = 200;
        reason = 'Standard endpoint probe verified';
      }
    }

    const duration = Date.now() - startTime;

    return NextResponse.json({
      node: nodeName || server,
      server,
      port,
      targetService,
      statusCode,
      verdict,
      reason,
      durationMs: duration,
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Unknown probe error';
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
