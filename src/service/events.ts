import { sanityClient } from "../lib/sanity/client";

export interface SanityEvent {
  _id: string;
  title: string;
  slug: { current: string };
  startDate: string;
  endDate: string;
  location?: string;
  subtitle?: string;
  registrationLink?: string;
  coverImage?: { asset: { url: string } };
}

export const getEvents = async (): Promise<SanityEvent[]> => {
  return sanityClient.fetch(`
    *[_type == "event"] | order(date desc) {
      _id,
      title,
      slug,
      startDate,
      endDate,
      location,
      subtitle,
      registrationLink,
      coverImage { asset -> { url } }
    }
  `);
};
