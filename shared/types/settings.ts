
export interface SiteInfo {
  name: string;
  tagline: string;
  logo: string;
  favicon: string;
  maintenanceMode: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface SocialLinks {
  facebook: string;
  youtube: string;
  linkedin: string;
  tiktok: string;
}

export interface SEOSettings {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  ogImage: string;
}

export interface GeneralSettings {
  site: SiteInfo;
  contact: ContactInfo;
  social: SocialLinks;
  seo: SEOSettings;
}
