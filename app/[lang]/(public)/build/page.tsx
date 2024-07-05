import { getTranslations } from "next-intl/server";
import React from "react";
import Image from "next/image";
import { Link } from "@/utils/navigation";
import prisma from "@/lib/prisma";
import { Build } from "@/schema";

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
