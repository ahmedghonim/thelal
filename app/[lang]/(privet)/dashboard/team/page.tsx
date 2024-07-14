import { getAllAuthors } from "@/actions/blog";
import { Link } from "@/utils/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import Avatar from "@/images/avatar.jpg";
import { Button } from "@/ui/atoms";

async function Author({ params: { lang } }: { params: { lang: string } }) {
  const t = await getTranslations("common");
  const data = (await getAllAuthors()) as any;

  return (
    <div className="py-10">
      <Link href="/dashboard/team/new">
        <Button>{t("new_member")}</Button>
      </Link>

      <div className="grid lg:grid-cols-4  md:grid-cols-3 2xl:grid-cols-5  mt-32 gap-y-28 gap-x-4 ">
        {data?.map((item: any) => (
          <Link
            href={`/dashboard/team/${item.id}`}
            key={item.id}
            className="flex relative flex-col grow items-center pt-6 pb-6 w-full rounded-xl bg-zinc-100 leading-[150%] max-md:px-5 text-center"
          >
            <Image
              loading="lazy"
              src={item.image || Avatar}
              alt={`Portrait of ${item.name}`}
              width={100}
              height={100}
              className="rounded-full size-[100px] absolute -top-[90%] translate-y-1/2"
            />
            <h2 className="self-stretch mt-10 text-lg font-bold text-zinc-800">
              {item.name[lang]}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Author;
