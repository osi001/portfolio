import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // "pv8y60vp"
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // "production"
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // "2022-11-16"
  useCdn: process.env.NODE_ENV === "production",
};

//set up client to fetch data

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  ImageUrlBuilder(sanityClient).image(source);
