import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultURL = "";

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
