import type { Metadata } from "next";
import "./globals.css";
import "./helperCss.scss";
import Header from "@/components/Share/Header/Header";
import SidebarItems from "@/components/Sidebar/SidebarItems";

export const metadata: Metadata = {
  title: "Grocery Store",
  description: "An Online Shopping Experience",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body >
        <div className="flex ">
          <div className="w-full md:w-[6%] bg-white h-screen sticky top-0 left-0 hidden md:block">
            <SidebarItems />
          </div>
          <div className="w-full md:w-[94%] bg-gray-50">
            <Header />
            <div className="">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}


