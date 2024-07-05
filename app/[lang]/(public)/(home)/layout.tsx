import { getTranslations } from "next-intl/server";
import React from "react";
import Image from "next/image";
import SectionImage1 from "@/images/01_2-Photo.png";
import SectionImage2 from "@/images/Cam_04.jpg";
import SectionImage3 from "@/images/00-Maquette.jpg";
import SectionImage4 from "@/images/01_4-Photo.png";
import SectionImage5 from "@/images/01_5-Photo.png";
import SectionImage6 from "@/images/qoute.png";
import { Button, Text } from "@/ui/atoms";
import MapImage from "@/images/map.png";
import { Link } from "@/utils/navigation";
import NumberTicker from "@/ui/molecules/number-ticker";
import prisma from "@/lib/prisma";
import { useLocale } from "next-intl";
import { Home } from "@/schema";

const HomeLayout = async ({
  hero,
  params: { lang },
}: {
  hero: React.ReactNode;
  params: { lang: string };
}) => {
  const t = await getTranslations("common");
  const values = (await prisma.home.findFirst()) as any;
  return (
    <>
      <div className="h-[70vh]  mt-20">{hero}</div>
      <div className="text-5xl flex gap-10 items-center justify-center  py-[200px] ">
        <div className="flex flex-col items-center">
          <span>
            + <NumberTicker value={Number(values?.project || 0)} />
          </span>
          <Text variant="p"> {t("projects")} </Text>
        </div>
        <div className="flex flex-col items-center">
          <span>
            + <NumberTicker value={Number(values?.client || 0)} />
          </span>
          <Text variant="p"> {t("clients")} </Text>
        </div>
      </div>
      <Image
        src={values?.image_1 as string}
        alt="section-image"
        width={1000}
        height={1000}
        className="w-full pb-10 h-full object-cover"
      />

      <div className="flex flex-col gap-16 px-20   my-10 py-10">
        <h2 className="text-[50px] font-bold">{t("design")}</h2>
        <div className="flex justify-between">
          <Link href="design/1">
            <Image
              src={SectionImage2}
              alt="section-image"
              className="w-[383px] rounded-md shadow-lg"
            />
          </Link>

          <Link href="design/1">
            <Image
              src={SectionImage3}
              alt="section-image"
              className="w-[383px] rounded-md shadow-lg"
            />
          </Link>
        </div>
        <Link href="/design">
          <Button className=" ms-auto">
            {t("view_all_", {
              name: t("design"),
            })}
          </Button>
        </Link>
      </div>

      <Image
        src={values?.image_2 as string}
        alt="section-image"
        width={1000}
        height={1000}
        className="w-full  my-20"
      />

      <div className="flex flex-col gap-16 px-20   my-10 py-10">
        <h2 className="text-[50px] font-bold">{t("build")}</h2>
        <div className="flex justify-between">
          <Link href="design/1">
            <Image
              src={SectionImage2}
              alt="section-image"
              className="w-[383px] rounded-md shadow-lg"
            />
          </Link>

          <Link href="design/1">
            <Image
              src={SectionImage3}
              alt="section-image"
              className="w-[383px] rounded-md shadow-lg"
            />
          </Link>
        </div>
        <Button className="ms-auto">
          {t("view_all_", {
            name: t("build"),
          })}
        </Button>
      </div>

      <Link href={values?.location as string} target="_blank">
        <Image
          src={values?.image_3 as string}
          alt="section-image"
          width={1000}
          height={1000}
          className="w-full my-20 "
        />
      </Link>

      <div className="flex flex-col gap-8 px-20  py-10">
        <h2 className="text-[50px] font-bold ">{t("our_goal")}</h2>
        <h3 className="text-lg w-1/2  ">{values?.aim?.[lang] as string}</h3>
        <div className="h-[340px] overflow-hidden relative mt-20">
          <Link href="/">
            <Image
              src={MapImage}
              alt="map"
              className="h-[340px] w-full object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="relative  mt-20 h-[80vh]">
        <div className="space-y-5 absolute text-center start-1/2 top-1/2 rtl:translate-x-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <h3 className="text-[31px]">“{values?.quote?.[lang] as string}”</h3>
          <p className="text-lg">— {values?.author?.[lang] as string}</p>
        </div>
        <Image
          src={SectionImage6}
          alt="section-image"
          className="w-full h-full object-cover "
        />
      </div>
    </>
  );
};

export default HomeLayout;
