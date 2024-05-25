import MainLayoutPage from "@/layout/main-layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayoutPage>{children}</MainLayoutPage>;
}
