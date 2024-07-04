import Footer from "@/component/footer";
import Header from "@/component/header";
import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header isLandingPage={false} />
      {children}
      <Footer />
    </>
  );
}
