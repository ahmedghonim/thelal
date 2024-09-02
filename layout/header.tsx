import React from "react";
import { InstagramIcon, Linkedin, Mail, Menu } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Logo from "@/images/logo.png";
import { Link } from "@/utils/navigation";
import LocaleSwitcher from "@/ui/atoms/locale-switcher";
import X from "@/images/x-social.svg";
import Whatsapp from "@/images/whatsapp-social.svg";
import prisma from "@/lib/prisma";
import { Sheet, SheetContent, SheetTrigger } from "@/ui/atoms/sheet";
import { Button } from "@/ui/atoms";
async function Header({}) {
  const t = await getTranslations("common");
  const values = (await prisma.home.findFirst().catch((error) => {
    console.error(error);
    return;
  })) as any;
  return (
    <>
      <div className="max-md:p-4 md:grid grid-cols-3 max-md:grid-cols-2 max-md:gap-2 items-center w-full pt-5 hidden">
        <div className="flex gap-3 text-natural group cursor-pointer hover:text-opacity-50 duration-200 ">
          <a
            target="_blank"
            href={values?.instagram}
            className="hover:text-opacity-100  hover:text-natural"
          >
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            href={values?.linkedin}
            className="hover:text-opacity-100  hover:text-natural"
          >
            <Linkedin />
          </a>
          <a
            target="_blank"
            href={values?.x}
            className="hover:text-opacity-100  hover:text-natural"
          >
            <X className="fill-current size-5 mt-1" />
          </a>

          <a
            target="_blank"
            href={values?.whatsapp}
            className="hover:text-opacity-100  hover:text-natural"
          >
            <Whatsapp className="fill-current  size-6" />
          </a>

          <span className="hover:text-opacity-100  hover:text-natural">
            <Mail />
          </span>

          <LocaleSwitcher />
        </div>

        <ul className="flex gap-6 max-md:order-3 group text-natural-dark cursor-pointer hover:text-natural-dark/20 duration-200">
          <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
            <Link href="/">{t("home")}</Link>
          </li>
          <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
            <Link href="/design">{t("design")}</Link>
          </li>
          <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
            <Link href="/build">{t("build")}</Link>
          </li>
          <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
            <Link href="/our-blog">{t("our-blog")}</Link>
          </li>
          <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
            <Link href="/team">{t("team")}</Link>
          </li>

          <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
            <Link href="/contact-us"> {t("contact")}</Link>
          </li>
        </ul>

        <Link href="/" className="text-5xl font-bold text-black ms-auto">
          <Image src={Logo} alt="logo" className="w-32 object-contain" />
        </Link>
      </div>
      <div className="md:hidden flex justify-between items-center w-full p-5">
        <Link href="/" className="text-5xl font-bold text-black">
          <Image src={Logo} alt="logo" className="w-32 object-contain" />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="space-y-8 pt-4">
            <Link href="/" className="text-5xl font-bold text-black ms-auto ">
              <Image src={Logo} alt="logo" className="w-32 object-contain" />
            </Link>

            <div className="flex gap-3 text-natural group cursor-pointer hover:text-opacity-50 duration-200 ">
              <a
                target="_blank"
                href={values?.instagram}
                className="hover:text-opacity-100  hover:text-natural"
              >
                <InstagramIcon />
              </a>
              <a
                target="_blank"
                href={values?.linkedin}
                className="hover:text-opacity-100  hover:text-natural"
              >
                <Linkedin />
              </a>
              <a
                target="_blank"
                href={values?.x}
                className="hover:text-opacity-100  hover:text-natural"
              >
                <X className="fill-current size-5 mt-1" />
              </a>

              <a
                target="_blank"
                href={values?.whatsapp}
                className="hover:text-opacity-100  hover:text-natural"
              >
                <Whatsapp className="fill-current  size-6" />
              </a>

              <span className="hover:text-opacity-100  hover:text-natural">
                <Mail />
              </span>

              <LocaleSwitcher />
            </div>
            <ul className="flex flex-col gap-6 max-md:order-3 group text-natural-dark cursor-pointer hover:text-natural-dark/20 duration-200">
              <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
                <Link href="/">{t("home")}</Link>
              </li>
              <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
                <Link href="/design">{t("design")}</Link>
              </li>
              <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
                <Link href="/build">{t("build")}</Link>
              </li>
              <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
                <Link href="/our-blog">{t("our-blog")}</Link>
              </li>
              <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
                <Link href="/team">{t("team")}</Link>
              </li>

              <li className="hover:text-opacity-100 hover:text-natural-dark text-nowrap">
                <Link href="/contact-us"> {t("contact")}</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default Header;
