import { getTranslations } from "next-intl/server";
import React from "react";
import HeroImage from "@/images/00-Maquitte.jpg";
import Image from "next/image";
const HomePage = async () => {
  const t = await getTranslations("common");
  return (
    <div className="flex justify-center items-center h-[70vh]  absolute left-0 right-0 top-[10vh] z-[-1]">
      <Image src={HeroImage} alt="hero" className="h-full w-full absolute" />
      <h1 className="text-5xl font-bold w-1/2 ">{t("architectural_design")}</h1>
    </div>
  );
};

export default HomePage;
