import { getTranslations } from "next-intl/server";
import React from "react";
import Image from "next/image";
import { Link } from "@/utils/navigation";
import prisma from "@/lib/prisma";
import { Build } from "@/schema";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const t = await getTranslations("common");

  return {
    title: t("build"),
    alternates: {
      canonical: params.lang === "en" ? `/build` : `/${params.lang}/build`,
      languages: {
        en: "/build",
        "en-US": "/build",
        "en-au": "/build",
        "en-bz": "/build",
        "en-ca": "/build",
        "en-ie": "/build",
        "en-jm": "/build",
        "en-nz": "/build",
        "en-za": "/build",
        "en-tt": "/build",
        "en-gb": "/build",
        "en-us": "/build",
        "ar-AR": "/ar/build",
        "ar-dz": "/ar/build",
        "ar-bh": "/ar/build",
        "ar-eg": "/ar/build",
        "ar-iq": "/ar/build",
        "ar-jo": "/ar/build",
        "ar-kw": "/ar/build",
        "ar-lb": "/ar/build",
        "ar-ly": "/ar/build",
        "ar-ma": "/ar/build",
        "ar-om": "/ar/build",
        "ar-qa": "/ar/build",
        "ar-sa": "/ar/build",
        "ar-sy": "/ar/build",
        "ar-tn": "/ar/build",
        "ar-ae": "/ar/build",
        "ar-ye": "/ar/build",
      },
    },
    // openGraph: {
    //   title: t("build"),
    //   url: `https://thelal.com/${params.lang}/build`,
    //   images: [
    //     {
    //       url: `${process.env.images_domain}/apple-touch-icon-144x144.png`,
    //       width: 144,
    //       height: 144,
    //       alt: t("titles.leagues"),
    //     },
    //   ],
    // },
  };
}
const BuildPage = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  const t = await getTranslations("common");
  const values = (await prisma.buildCategory.findMany({
    include: {
      Build: true,
    },
  })) as any;
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6 my-10 px-10 py-5 ">
        {values.map((value: any) => (
          <div key={value.id} className="flex flex-col gap-6  py-5">
            <h2 className="text-[30px] font-bold uppercase ">
              {value.name[lang]}
            </h2>

            <div className="grid grid-cols-4 gap-10">
              {value?.Build?.map((build: Build) => (
                <Link key={build.id} href={`/build/${build.id}`}>
                  <Image
                    width={300}
                    height={300}
                    src={build.images[0]}
                    alt="section-image"
                    className="w-full h-full object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildPage;