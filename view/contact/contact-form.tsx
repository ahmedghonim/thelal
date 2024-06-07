"use client";
import { Button } from "@/ui/atoms";
import { Form } from "@/ui/atoms/ui/form";
import FormInput from "@/ui/molecules/form-input";
import FormTextArea from "@/ui/molecules/form-textarea";
import { useTranslations } from "next-intl";
import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const t = useTranslations("common");
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <Form {...form}>
      <div className="space-y-5">
        <FormInput form={form} name="name" label={t("name")} />
        <FormInput form={form} name="email" type="email" label={t("email")} />
        <FormInput form={form} name="phone" label={t("phone_number")} />
        <FormTextArea form={form} name="message" label={t("message")} />
        <Button type="submit">{t("send")}</Button>
      </div>
    </Form>
  );
}

export default ContactForm;
