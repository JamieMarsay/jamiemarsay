export interface IBlock {
  ctaText?: string;
  title: string;
  text?: string;
  href?: string;
  ctas?: ICta[];
}

export interface ICta {
  text: string;
  href: string;
}
