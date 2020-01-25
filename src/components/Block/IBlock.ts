export interface IBlock {
  paragraphs?: string[];
  ctaText?: string;
  title: string;
  href?: string;
  ctas?: ICta[];
}

export interface ICta {
  text: string;
  href: string;
}
