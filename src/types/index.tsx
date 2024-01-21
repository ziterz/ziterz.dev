export type Project = {
  id: number;
  path: string;
  title: string;
  desc: string;
  img: string[];
  tags: string[];
  footer: string;
  link?: string;
  github?: string;
  appstore?: string;
  testflight?: string;
};
