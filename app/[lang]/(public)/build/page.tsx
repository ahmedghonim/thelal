import { getTranslations } from "next-intl/server";
import React from "react";
import Image from "next/image";
import SectionImage1 from "@/images/01_2-Photo.png";
import SectionImage2 from "@/images/Cam_04.jpg";
import SectionImage3 from "@/images/00-Maquette.jpg";
import SectionImage4 from "@/images/01_4-Photo.png";
import SectionImage5 from "@/images/01_5-Photo.png";
import SectionImage6 from "@/images/01.jpg";
import { Link } from "@/utils/navigation";

const DesignPage = async () => {
  const t = await getTranslations("common");
  return (
    <>
      <div className="flex flex-col gap-6 my-10 px-10 py-5">
        <h2 className="text-[30px] font-bold uppercase ">{t("residential")}</h2>
        <div className="grid grid-cols-4 gap-10">
          <Link href="design/1">
            <Image
              src={SectionImage5}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>
          <Link href="design/1">
            <Image
              src={SectionImage2}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>

          <Link href="design/1">
            <Image
              src={SectionImage1}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>
          <Link href="design/1">
            <Image
              src={SectionImage4}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-6  my-10 px-10 py-5">
        <h2 className="text-[30px] font-bold uppercase ">{t("offices")}</h2>
        <div className="grid grid-cols-4 gap-10">
          <Link href="design/1">
            <Image
              src={SectionImage1}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>
          <Link href="design/1">
            <Image
              src={SectionImage2}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>

          <Link href="design/1">
            <Image
              src={SectionImage3}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>
          <Link href="design/1">
            <Image
              src={SectionImage6}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6  my-10 px-10 py-5">
        <h2 className="text-[30px] font-bold uppercase ">{t("commercial")}</h2>
        <div className="grid grid-cols-4 gap-10">
          <Link href="design/1">
            <Image
              src={SectionImage2}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>
          <Link href="design/1">
            <Image
              src={SectionImage2}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>

          <Link href="design/1">
            <Image
              src={SectionImage3}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-6  my-10 px-10 py-5">
        <h2 className="text-[30px] font-bold uppercase ">
          {t("infrastructure")}
        </h2>
        <div className="grid grid-cols-4 gap-10">
          <Link href="design/1">
            <Image
              src={SectionImage5}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>
          <Link href="design/1">
            <Image
              src={SectionImage2}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>

          <Link href="design/1">
            <Image
              src={SectionImage3}
              alt="section-image"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DesignPage;
