import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VNsoftshouse — Visioneer Nusantara Software House",
  description:
    "Mobile apps, websites, ERP, AI automation and blockchain — designed and engineered by one focused team.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
