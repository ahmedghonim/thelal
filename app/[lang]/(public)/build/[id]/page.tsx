import { Text } from "@/ui/atoms";
import React from "react";
import SectionImage1 from "@/images/01_2-Photo.png";
import Image from "next/image";
import SumpSlider from "@/ui/molecules/sump-carosul";
import prisma from "@/lib/prisma";
import { getBuild } from "@/actions/build";
import { Build } from "@/schema";
import { getTranslations } from "next-intl/server";

async function DesignDetails({
  params: { id, lang },
}: {
  params: { id: string; lang: "ar" | "en" };
}) {
  const t = await getTranslations("common");
  const data = (await getBuild(+id)) as Build;
  return (
    <div className="space-y-10 mt-10">
      <SumpSlider images={data.images} />

      <Text as="h1">{data.title?.[lang]}</Text>
      <div>
        <ul className="space-y-4">
          {data.location?.[lang] && (
            <li>
              <strong>{t("location")}: </strong>
              {data.location?.[lang]}
            </li>
          )}
          {data.scope?.[lang] && (
            <li>
              <strong>{t("scope")}: </strong>
              {data.scope?.[lang]}
            </li>
          )}
          {data.year && (
            <li>
              <strong>{t("year")}: </strong>
              {data.year}
            </li>
          )}
          {data.status?.[lang] && (
            <li>
              <strong>{t("status")}: </strong>
              {data.status?.[lang]}
            </li>
          )}
          {data.team?.[lang] && (
            <li>
              <strong>{t("team")}: </strong>
              {data.team?.[lang]}
            </li>
          )}
        </ul>
      </div>
      {data.briefing?.[lang] && (
        <div className="grid grid-cols-2 gap-10 items-center">
          {data.briefing_image && (
            <Image
              src={data.briefing_image}
              width={400}
              height={400}
              alt="section-image"
              className="w-full h-full object-cover aspect-square"
            />
          )}
          <div>
            <Text as="h4">{t("briefing")}:</Text>
            <Text as="span">{data.briefing?.[lang]}</Text>
          </div>
        </div>
      )}
      {data.architectural_solution?.[lang] && (
        <div className="grid grid-cols-2 gap-10 items-center">
          <div>
            <Text as="h4">{t("architectural_solution")}:</Text>
            <Text as="span">{data.architectural_solution?.[lang]}</Text>
          </div>
          {data.architectural_solution_image && (
            <Image
              src={data.architectural_solution_image}
              alt="section-image"
              width={400}
              height={400}
              className="w-full h-full object-cover aspect-square"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default DesignDetails;
