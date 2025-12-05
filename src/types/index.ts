interface MetaOpenGraph {
  title?: string;
  description?: string;
  url?: string;
  images?: string;
  siteName?: string;
  locale?: string;
  type?: 'website' | 'article';
}

interface MetaTwitter {
  title?: string;
  description?: string;
  images?: string;
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: `@${string}`;
}

export interface MetaData {
  title?: string;
  description?: string;
  keywords?: string;
  openGraph?: MetaOpenGraph;
  twitter?: MetaTwitter;
}

export interface LayoutProps {
  meta?: MetaData;
  bodyClass: string;
}
