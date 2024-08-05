import { getTranslations } from "next-intl/server";
import React from "react";
import Image from "next/image";
import { Link } from "@/utils/navigation";
import prisma from "@/lib/prisma";
import { Design } from "@/schema";

const DesignPage = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  const t = await getTranslations("common");
  const values = (await prisma.designCategory
    .findMany({
      include: {
        Design: true,
      },
    })
    .catch((error) => {
      console.error(error);
      return;
    })) as any;
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-6 my-10 px-10 py-5 ">
        {values?.map((value: any) => (
          <div key={value.id} className="flex flex-col gap-6  py-5">
            <h2 className="text-[30px] font-bold uppercase ">
              {value.name[lang]}
            </h2>

            <div className="grid grid-cols-4 gap-10">
              {value?.Design?.map((design: Design) => (
                <Link key={design.id} href={`/design/${design.id}`}>
                  <Image
                    width={300}
                    height={300}
                    src={design.images[0]}
                    alt="section-image"
                    className="w-full h-full aspect-square object-cover"
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

export default DesignPage;
