"use client";
import { createContact } from "@/actions/contact";
import { onMailer } from "@/actions/mailer";
import { Contact, contactSchema } from "@/schema";
import { Button } from "@/ui/atoms";
import { Form } from "@/ui/molecules/form";
import FormInput from "@/ui/molecules/form-input";
import FormTextArea from "@/ui/molecules/form-textarea";
import { useRouter } from "@/utils/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function ContactForm() {
  const t = useTranslations("common");
  const router = useRouter();
  const [isPending, startTransaction] = useTransition();
  const form = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: Contact) => {
    startTransaction(() => {
      createContact(values)
        .then(() => {
          onMailer({
            email: process.env.NEXT_PUBLIC_NODE_MAILER_EMAIL!,
            subject: values.subject,
            html: `
            <p>Name: ${values.name} </p>
            <p>Email: ${values.email} </p>
            <p>Phone: ${values.phone} </p>
            <p>Subject: ${values.subject} New Lead </p>
            <p>Message: ${values.message} </p>
            `,
          });
          onMailer({
            email: values.email,
            subject: "Thelal Support",
            html: `
            <p>thanks <strong>${values.name}</strong/> for contact us we will reich you sone </p>
            `,
          });
          toast.success(t("message_send_successfully"));
          router.push("/");
          form.reset();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    });
  };
  return (
    <Form {...form}>
      <FormInput form={form} name="name" label={t("name")} />
      <FormInput form={form} name="email" type="email" label={t("email")} />
      <FormInput form={form} name="phone" label={t("phone_number")} />
      <FormInput form={form} name="subject" label={t("company_name")} />
      <FormTextArea form={form} name="message" label={t("message")} />
      <Button
        variant="secondary"
        type="submit"
        className="ms-auto"
        isLoading={isPending}
        onClick={form.handleSubmit(onSubmit)}
      >
        {t("send")}
      </Button>
    </Form>
  );
}

export default ContactForm;
