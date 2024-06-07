import { getTranslations } from "next-intl/server";
import React from "react";
import Image from "next/image";
import SectionImage1 from "@/images/01_2-Photo.png";
import SectionImage2 from "@/images/Cam_04.jpg";
import SectionImage3 from "@/images/00-Maquette.jpg";
import SectionImage4 from "@/images/01_4-Photo.png";
import SectionImage5 from "@/images/01_5-Photo.png";
import SectionImage6 from "@/images/01.jpg";
import { Button } from "@/ui/atoms";
import MapImage from "@/images/map.png";
import { Link } from "@/utils/navigation";

const HomeLayout = async ({ hero }: { hero: React.ReactNode }) => {
  const t = await getTranslations("common");
  return (
    <>
      <div className="h-[50vh]  my-20">{hero}</div>

      <h2 className="text-center text-3xl w-1/2 mx-auto leading-[50px] py-10 font-semibold">
        {t("hero_quote")}
      </h2>

      <Image src={SectionImage1} alt="section-image" className="w-full " />

      <div className="flex flex-col gap-16 px-20  bg-primary/90 my-10 py-10">
        <h2 className="text-[50px] font- text-white">{t("design")}</h2>
        <div className="flex justify-between">
          <Image
            src={SectionImage2}
            alt="section-image"
            className="w-[383px] rounded-md shadow-lg"
          />

          <Image
            src={SectionImage3}
            alt="section-image"
            className="w-[383px] rounded-md shadow-lg"
          />
        </div>
        <Button className="border-white text-white">
          {t("view_all_", {
            name: t("design"),
          })}
        </Button>
      </div>

      <Image
        src={SectionImage4}
        alt="section-image"
        className="w-full  my-20"
      />

      <div className="flex flex-col gap-16 px-20  bg-primary/90 my-10 py-10">
        <h2 className="text-[50px] font-bold text-white">{t("build")}</h2>
        <div className="flex justify-between">
          <Image
            src={SectionImage2}
            alt="section-image"
            className="w-[383px] rounded-md shadow-lg"
          />

          <Image
            src={SectionImage3}
            alt="section-image"
            className="w-[383px] rounded-md shadow-lg"
          />
        </div>
        <Button className="border-white text-white">
          {t("view_all_", {
            name: t("build"),
          })}
        </Button>
      </div>

      <Image
        src={SectionImage5}
        alt="section-image"
        className="w-full my-20 "
      />

      <div className="flex flex-col gap-8 px-20  bg-primary/90 py-10">
        <h2 className="text-[50px] font-bold text-white">{t("our_goal")}</h2>
        <h3 className="text-lg w-1/2  text-white">{t("our_goal_desc")}</h3>
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

      <div className="relative  mt-20 ">
        <div className="space-y-5 absolute start-[20%] top-20 translate-x-1/2 text-white">
          <h3 className="text-6xl">{t("values")}</h3>
          <ul className="text-3xl list-disc space-y-3">
            <li>{t("value_1")}</li>
            <li>{t("value_2")}</li>
            <li>{t("value_3")}</li>
            <li>{t("value_4")}</li>
            <li>{t("value_5")}</li>
          </ul>
        </div>
        <Image src={SectionImage6} alt="section-image" className="w-full" />
      </div>
    </>
  );
};

export default HomeLayout;
