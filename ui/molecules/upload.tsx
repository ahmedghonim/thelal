import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../atoms";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

type Props = {
  onChange: (url?: string) => void;
  value?: string;
  className?: string;
  label?: string;
};

const FileUpload = ({ onChange, value, className, label }: Props) => {
  const t = useTranslations("common");
  const type = value?.split(";")[0].split("/")[1];

  if (value) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        {type !== "pdf" ? (
          <div className={cn(className, "relative")}>
            <Image
              src={value}
              alt="uploaded image"
              className="object-cover w-full h-full"
              fill
            />
          </div>
        ) : (
          <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
            <FileIcon />
            <a
              href={value}
              target="_blank"
              rel="noopener_noreferrer"
              className="ml-2 text-sm text-primary dark:text-primary-hover hover:underline"
            >
              {t("view_PDF")}
            </a>
          </div>
        )}
        <Button
          onClick={async () => {
            // await removeFile(value);
            toast.info(t("image_removed"));
            onChange("");
          }}
          type="button"
        >
          <X className="w-4 h-4" />
          {t("remove")} {t("image")}
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full bg-muted/30">
      <label
        htmlFor="file-upload"
        className="flex items-center justify-center w-full h-40 cursor-pointer"
      >
        <FileIcon className="w-8 h-8" />
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
          {t("upload")} {label || t("image")}
        </span>
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*,.pdf"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              onChange(e.target.result as string);
            };
            reader.readAsDataURL(file);
          }
        }}
      />
    </div>
  );
};

export default FileUpload;
