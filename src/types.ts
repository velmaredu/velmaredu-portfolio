export type Project = {
  name: string;
  desc: string;
  image: string;
  category: string;
  links: {
    view: string;
    code?: string;
  };
};

export type Experience = {
  name: string;
  role: string;
  start: string;
  end?: string;
  icon: string;
  link?: string;
};

export enum Side {
  right = "right",
  left = "left",
}

export enum SkillCategory {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Database",
  OTHER = "Other",
}
