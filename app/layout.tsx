import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "این بود، این شد | استودیوی هم‌آفرینی ایده و هوش مصنوعی",
  description: "از ذهن شلوغ تا پروژه‌ای قابل‌فهم، قابل‌ساخت و قابل‌فروش؛ همراه با امیر احمدی و هوش مصنوعی.",
  metadataBase: new URL("https://inboodinshod.ir"),
  openGraph: { title:"این بود، این شد", description:"هرچه در ذهن داری بگو؛ با هم به واقعیت تبدیلش می‌کنیم.", type:"website", locale:"fa_IR", alternateLocale:"en_US" },
  icons: { icon:"/favicon.svg", shortcut:"/favicon.svg" },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
