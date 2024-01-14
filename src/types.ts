export type Project = {
  name: string;
  desc: string;
  image: string;
  category: string;
  links: {
    view: string;
    code?: string;
  };
}
