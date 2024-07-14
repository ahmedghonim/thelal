"use server";

import prisma from "@/lib/prisma";
import { Contact } from "@/schema";

const createContact = async (value: Contact) => {
  return prisma.contact.create({
    data: {
      ...(value as any),
    },
  });
};

const getContacts = async () => {
  return prisma.contact.findMany();
};

const getContact = async (id: number) => {
  return prisma.contact.findUnique({
    where: {
      id,
    },
  });
};

const contactRead = async (id: number) => {
  return prisma.contact.update({
    where: {
      id,
    },
    data: {
      isRead: true,
    },
  });
};
const contactDelete = async (id: number) => {
  return prisma.contact.delete({
    where: {
      id,
    },
  });
};

export { createContact, getContacts, getContact, contactRead, contactDelete };
