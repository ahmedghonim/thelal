"use client";
import { getTranslations } from "next-intl/server";
import React from "react";
import HeroImage from "@/images/00-Maquitte.jpg";
import Slider from "@/ui/molecules/carosul";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("common");
  return (
    <Slider
      data={[
        {
          image: HeroImage,
        },
        {
          image: HeroImage,
        },
        {
          image: HeroImage,
        },
        {
          image: HeroImage,
        },
      ]}
    />
  );
};

export default HomePage;
