import type { SiteContent } from '@/lib/content';

export default function AdSlot({ site }: { site: SiteContent }) {
  return <section className="ad-wrap"><div className="ad-slot"><div><span>{site.copy['advertisement.title']}</span><small>{site.copy['advertisement.description']}</small></div><div className="ad-unit">{site.copy['advertisement.dimensions']}</div></div></section>;
}
