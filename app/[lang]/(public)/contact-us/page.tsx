import { Text } from "@/ui/atoms";
import ContactForm from "@/view/contact/contact-form";
import { getTranslations } from "next-intl/server";
import React from "react";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
async function Page() {
  const t = await getTranslations("common");
  return (
    <div className="pt-10 space-y-10">
      <Text as="h1" className="text-wrap w-[380px]">
        {t("contact_us_title")}
      </Text>
      <div className="mx-[15%] space-y-4">
        <Text as="h2">{t("send_us_message")}</Text>
        <ContactForm />
      </div>
    </div>
  );
}

export default Page;
