import React from "react";
import { InstagramIcon, Linkedin, Mail, Languages } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Logo from "@/images/logo.png";
import { Link } from "@/utils/navigation";
import LocaleSwitcher from "@/ui/atoms/locale-switcher";
import X from "@/images/x-social.svg";
import Whatsapp from "@/images/whatsapp-social.svg";
async function Header({}) {
  const t = await getTranslations("common");
  return (
    <div className=" grid grid-cols-3 items-center w-full pt-5">
      <div className="flex gap-3 text-natural group cursor-pointer hover:text-opacity-50 duration-200 ">
        <span className="hover:text-opacity-100  hover:text-natural">
          <InstagramIcon />
        </span>
        <span className="hover:text-opacity-100  hover:text-natural">
          <Linkedin />
        </span>
        <span className="hover:text-opacity-100  hover:text-natural">
          <X className="fill-current size-5 mt-1" />
        </span>

        <span className="hover:text-opacity-100  hover:text-natural">
          <Whatsapp className="fill-current  size-6" />
        </span>

        <span className="hover:text-opacity-100  hover:text-natural">
          <Mail />
        </span>

        <LocaleSwitcher />
      </div>

      <ul className="flex gap-6  group text-natural-dark cursor-pointer hover:text-natural-dark/20 duration-200">
        <li className="hover:text-opacity-100 hover:text-natural-dark">
          <Link href="/">{t("home")}</Link>
        </li>
        <li className="hover:text-opacity-100 hover:text-natural-dark">
          <Link href="/design">{t("design")}</Link>
        </li>
        <li className="hover:text-opacity-100 hover:text-natural-dark">
          <Link href="/build">{t("build")}</Link>
        </li>

        <li className="hover:text-opacity-100 hover:text-natural-dark">
          <Link href="/contact-us"> {t("contact")}</Link>
        </li>
      </ul>

      <Link href="/" className="text-5xl font-bold text-black ms-auto">
        <Image src={Logo} alt="logo" className="w-32 object-contain" />
      </Link>
    </div>
  );
}

export default Header;
