import { SanityAsset } from "@sanity/image-url/lib/types/types";

interface SnaityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asser: {
    _ref: string;
    _type: "reference";
  };
}

export interface Technology extends SnaityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}

export interface Skill extends SnaityBody {
  _type: "skill";
  title: string;
  progress: number;
  image: Image;
}

export interface Project extends SnaityBody {
  _type: "project";
  title: string;
  linkToBuild: number;
  image: Image;
  summary: string;
  technologies: Technology[];
}

export interface PageInfo extends SnaityBody {
  _type: string;
  address: string;
  email: string;
  phoneNumber: string;
  profilePic: Image;
  heroImage: Image;
  backgroundInformation: string;
  name: string;
  role: string;
}

export interface Social extends SnaityBody {
  _type: "social";
  title: string;
  url: string;
}
