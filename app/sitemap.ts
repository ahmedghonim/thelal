import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultURL = "https://www.m1group-mr.com/";

  return [
    {
      url: `${defaultURL}/en`,
      lastModified: new Date(),
    },
    {
      url: `${defaultURL}/ar`,
      lastModified: new Date(),
    },
  ];
}
