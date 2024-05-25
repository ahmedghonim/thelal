import React from "react";
import { Facebook, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Logo from "@/images/logo.png";
async function Header({}) {
  const t = await getTranslations("common");
  return (
    <div className="px-14">
      <div className="flex gap-2 text-natural py-10 group cursor-pointer hover:text-opacity-50 duration-200 ">
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

      <nav className="flex justify-between items-center">
        <ul className="flex gap-4  py-20 group text-white cursor-pointer hover:text-white/20 duration-200">
          <li className="hover:text-opacity-100 hover:text-white">
            {t("home")}
          </li>
          <li className="hover:text-opacity-100 hover:text-white">
            {t("about")}
          </li>
          <li className="hover:text-opacity-100 hover:text-white">
            {t("services")}
          </li>
          <li className="hover:text-opacity-100 hover:text-white">
            {t("contact")}
          </li>
        </ul>

        <Link href="/" className="text-5xl font-bold text-black">
          <Image src={Logo} alt="logo" className="w-32 object-contain" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
