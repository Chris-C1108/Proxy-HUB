import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'NodeMatrix - AI & Proxy Capability Inspector',
  description:
    'Automated node capability inspection, region detection diagnostic engine, and multi-protocol subscription distribution for Antigravity 2, Claude Code, ChatGPT, and streaming.',
  openGraph: {
    title: 'NodeMatrix - AI & Proxy Capability Inspector',
    description:
      'Automated node capability inspection, region detection diagnostic engine, and multi-protocol subscription distribution for Antigravity 2, Claude Code, ChatGPT, and streaming.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NodeMatrix - AI & Proxy Capability Inspector',
    description:
      'Automated node capability inspection, region detection diagnostic engine, and multi-protocol subscription distribution for Antigravity 2, Claude Code, ChatGPT, and streaming.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
