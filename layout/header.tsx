import React from "react";
import { Facebook, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Logo from "@/images/logo.png";
async function Header({}) {
  const t = await getTranslations("common");
  return (
    <div className=" grid grid-cols-3 items-center w-full pt-5">
      <div className="flex gap-2 text-natural group cursor-pointer hover:text-opacity-50 duration-200 ">
        <span className="hover:text-opacity-100 hover:text-natural">
          <Facebook />
        </span>
        <span className="hover:text-opacity-100  hover:text-natural">
          <Linkedin />
        </span>
        <span className="hover:text-opacity-100 ps-2 hover:text-natural">
          <Mail />
        </span>
      </div>

      <ul className="flex gap-6  group text-natural-dark cursor-pointer hover:text-natural-dark/20 duration-200">
        <li className="hover:text-opacity-100 hover:text-natural-dark">
          {t("home")}
        </li>
        <li className="hover:text-opacity-100 hover:text-natural-dark">
          {t("about")}
        </li>
        <li className="hover:text-opacity-100 hover:text-natural-dark">
          {t("services")}
        </li>
        <li className="hover:text-opacity-100 hover:text-natural-dark">
          {t("contact")}
        </li>
      </ul>

      <Link href="/" className="text-5xl font-bold text-black ms-auto">
        <Image src={Logo} alt="logo" className="w-32 object-contain" />
      </Link>
    </div>
  );
}

export default Header;
