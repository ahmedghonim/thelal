import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth";
import authConfig from "./credentials";

const authOptions: NextAuthConfig = {
  //!IMPORTANT: strategy for Auth.js
  session: {
    strategy: "jwt",
  },
  debug: true,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.name = token.name as string;
      session.user.email = token.email as string;

      return session;
    },
  },
  //@ts-ignore
  adapter: PrismaAdapter(prisma),
  ...authConfig,
  pages: {
    signIn: "/sign-in",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
