import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import { getSiteContent } from '@/lib/content';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteContent();
  return {
    title: site.copy['seo.title'],
    description: site.copy['seo.description'],
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const site = await getSiteContent();
  const palette = site.designSystem.palette;
  const typography = site.designSystem.typography;
  const primaryFont = site.designSystem.fontPrimarySource === 'google'
    ? `'${site.designSystem.fontPrimaryGoogleFamily}', sans-serif`
    : site.designSystem.fontPrimaryFileUrl
      ? 'WCN Primary, sans-serif'
      : site.designSystem.fontPrimary;
  const accentFont = site.designSystem.fontAccentSource === 'google'
    ? `'${site.designSystem.fontAccentGoogleFamily}', sans-serif`
    : site.designSystem.fontAccentFileUrl
      ? 'WCN Accent, sans-serif'
      : site.designSystem.fontAccent;

  const designStyle = {
    '--bg': palette.background,
    '--panel': '#161616',
    '--line': palette.border,
    '--text': palette.text,
    '--muted': palette.muted,
    '--orange': palette.accent,
    '--red': palette.accent,
    '--brand-accent': palette.accent,
    '--link': palette.link,
    '--quote': palette.quote,
    '--callout-bg': palette.callout,
    '--font-primary': primaryFont,
    '--font-heading': accentFont,
    '--font-subheading': accentFont,
    '--font-body-size': typography.body?.fontSize || '1.08rem',
    '--font-body-line-height': typography.body?.lineHeight || '1.8',
  } as React.CSSProperties;

  const googleFonts = [
    site.designSystem.fontPrimarySource === 'google' ? site.designSystem.fontPrimaryGoogleUrl : null,
    site.designSystem.fontAccentSource === 'google' ? site.designSystem.fontAccentGoogleUrl : null,
  ].filter(Boolean);

  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebas.variable}`} style={designStyle}>
        {(site.designSystem.fontPrimarySource === 'upload' && site.designSystem.fontPrimaryFileUrl) ||
        (site.designSystem.fontAccentSource === 'upload' && site.designSystem.fontAccentFileUrl) ? (
          <style>{[
            site.designSystem.fontPrimarySource === 'upload' && site.designSystem.fontPrimaryFileUrl
              ? `@font-face{font-family:'WCN Primary';src:url('${site.designSystem.fontPrimaryFileUrl}');font-display:swap;}`
              : '',
            site.designSystem.fontAccentSource === 'upload' && site.designSystem.fontAccentFileUrl
              ? `@font-face{font-family:'WCN Accent';src:url('${site.designSystem.fontAccentFileUrl}');font-display:swap;}`
              : '',
          ].join('')}</style>
        ) : null}
        {googleFonts.map((url, index) => (
          <link key={url || index} rel="preconnect" href="https://fonts.googleapis.com" />
        ))}
        {googleFonts.map((url, index) => (
          <link key={`${url}-${index}`} rel="stylesheet" href={url || ''} />
        ))}
        {children}
      </body>
    </html>
  );
}
