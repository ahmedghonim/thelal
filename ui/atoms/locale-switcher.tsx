"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "@/utils/navigation";
import Select from "../molecules/select";

export default function LocaleSwitcher() {
  const { replace } = useRouter();

  const fullPath = usePathname();
  const lang = useLocale();
  const [isLoading, startTransition] = useTransition();

  const redirectedPathName = async (value: any) => {
    const locale = value.value;
    startTransition(() => {
      const path = fullPath.replace(lang, "");

      replace("/" + locale + "/" + path);
    });
  };

  const options = [
    { value: "en", label: "EN 🇬🇧" },
    { value: "ar", label: "AR 🇲🇦" },
  ];

  return (
    <Select
      isLoading={isLoading}
      value={lang}
      options={options}
      onChange={redirectedPathName}
      className="!h-8"
    />
  );
}
