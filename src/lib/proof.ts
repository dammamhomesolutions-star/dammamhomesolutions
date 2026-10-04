// Real projects and real customer reviews only. Both lists are intentionally
// empty until the business supplies genuine material — the homepage sections
// that use them render nothing while they're empty.

export interface Project {
  service: string;
  href: string;
  area?: string;
  problem: string;
  work: string;
  result: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}

export interface Review {
  name: string;
  area?: string;
  service: string;
  text: string;
  sourceUrl?: string;
}

export const projects: Project[] = [];
export const reviews: Review[] = [];
