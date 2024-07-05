import React from "react";
import Logo from "@/assets/images/logo-2.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("common");
  const pages = ["design", "build", "contact"];
  return (
    <div className="flex min-h-screen">
      <div className="w-[300px] bg-black/80 h-screen">
        <Image src={Logo} alt="logo" className="p-12" />
        <div className="flex flex-col gap-2 p-10 text-white font-bold text-lg ">
          <Link href="/dashboard" className="p-4  hover:text-white/60">
            {t("home")}
          </Link>
          {pages.map((page) => (
            <Link
              href={`/dashboard/${page}`}
              key={page}
              className="p-4 hover:text-white/60"
            >
              {t(page)}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full p-10 h-screen overflow-auto">{children}</div>
    </div>
  );
}

export default Layout;
