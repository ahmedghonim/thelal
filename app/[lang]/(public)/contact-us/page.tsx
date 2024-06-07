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
      <hr />
      <Text as="h2" className="text-wrap w-[380px]">
        {t("find_us")}
      </Text>
      <div className="mx-[15%] space-y-4">
        <ul className="space-y-4">
          <li className=" flex gap-10 items-center">
            <Image src={Logo} width={100} height={100} alt="logo" />
            <Text as="p">{t("phone")}: 966551352319 </Text>
          </li>
          <li className=" flex gap-10 items-center">
            <Image src={Logo} width={100} height={100} alt="logo" />
            <Text as="p">{t("email")}: thelal.studio@gmail.com </Text>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
