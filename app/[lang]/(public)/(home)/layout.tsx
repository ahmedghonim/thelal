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
import Divider from "@/layout/divider";
const HomeLayout = async ({ hero }: { hero: React.ReactNode }) => {
  const t = await getTranslations("common");
  return (
    <>
      <div className="h-[50vh] snap-center">{hero}</div>
      <Divider />

      <h2 className="text-center text-3xl w-1/2 mx-auto leading-[50px] font-semibold">
        {t("hero_quote")}
      </h2>

      <Image
        src={SectionImage1}
        alt="section-image"
        className="w-full snap-center"
      />
      <Divider />
      <div className="flex flex-col gap-16 px-20 snap-center">
        <h2 className="text-[50px] font-bold">{t("design")}</h2>
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
        <Button>
          {t("view_all_", {
            name: t("design"),
          })}
        </Button>
      </div>

      <Image
        src={SectionImage4}
        alt="section-image"
        className="w-full snap-center my-20"
      />

      <Divider />
      <div className="flex flex-col gap-16 px-20 snap-center">
        <h2 className="text-[50px] font-bold">{t("build")}</h2>
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
        <Button>
          {t("view_all_", {
            name: t("build"),
          })}
        </Button>
      </div>

      <Image
        src={SectionImage5}
        alt="section-image"
        className="w-full my-20 snap-center"
      />
      <Divider />
      <div className="flex flex-col gap-8 px-20 snap-center">
        <h2 className="text-[50px] font-bold">{t("our_goal")}</h2>
        <h3 className="text-lg w-1/2">{t("our_goal_desc")}</h3>
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
      <Divider />
      <div className="relative snap-center">
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
