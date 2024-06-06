import { getTranslations } from "next-intl/server";
import React from "react";
import HeroImage from "@/images/00-Maquitte.jpg";
import Slider from "@/ui/molecules/carosul";

const HomePage = async () => {
  const t = await getTranslations("common");
  return (
    <div className="my-10">
      <Slider
        data={[
          {
            image: HeroImage,
            title: t("architectural_design"),
          },
          {
            image: HeroImage,
            title: t("architectural_design"),
          },
          {
            image: HeroImage,
            title: t("architectural_design"),
          },
          {
            image: HeroImage,
            title: t("architectural_design"),
          },
        ]}
      />
    </div>
  );
};

export default HomePage;
