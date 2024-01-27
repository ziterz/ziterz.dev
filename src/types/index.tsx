export type Project = {
  id: number;
  path: string;
  title: string;
  desc: string;
  thumbnail: string;
  img: string[];
  video?: string;
  footer: string;
  link?: string;
  github?: string;
  appstore?: string;
  testflight?: string;
};
