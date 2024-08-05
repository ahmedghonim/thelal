import React from "react";
import Slider from "@/ui/molecules/carosul";
import prisma from "@/lib/prisma";

const HomePage = async () => {
  const values = await prisma.home.findFirst().catch((error) => {
    console.error(error);
    return;
  });

  return <Slider data={values?.images as string[]} />;
};

export default HomePage;
