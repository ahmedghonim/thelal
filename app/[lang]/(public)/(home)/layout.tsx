import { getTranslations } from "next-intl/server";
import React from "react";

import Divider from "@/layout/divider";
const HomeLayout = async ({ hero }: { hero: React.ReactNode }) => {
  const t = await getTranslations("common");
  return (
    <>
      <div className="h-[50vh] snap-center">{hero}</div>
      <Divider />
    </>
  );
};

export default HomeLayout;
