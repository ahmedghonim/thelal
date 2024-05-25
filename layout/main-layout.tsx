import React from "react";
import Header from "./header";
import { getTranslations } from "next-intl/server";

const MainLayoutPage = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations("common");
  return (
    <main className="relative max-w-[960px] mx-auto snap-y snap-proximity h-screen overflow-auto">
      <Header />
      {children}
      {/* copy right */}
      <footer className="py-10 text-gray-500">
        {t("copy_writes", { year: new Date().getFullYear() })}
      </footer>
    </main>
  );
};

export default MainLayoutPage;
