import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const blauerNue = localFont({
  variable: "--font-blauer-nue",
  display: "swap",
  src: [
    { path: "../fonts/BlauerNue-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../fonts/BlauerNue-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/BlauerNue-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/BlauerNue-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/BlauerNue-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/BlauerNue-Bold.woff2", weight: "700", style: "normal" },
  ],
});

const azuko = localFont({
  variable: "--font-azuko",
  display: "swap",
  src: "../fonts/Azuko-Techno.ttf",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.draanacarolinanogueira.com.br"),
  title: {
    default: "Ana Carolina Nogueira — Harmonização Orofacial",
    template: "%s — Ana Carolina Nogueira",
  },
  description:
    "Harmonização Orofacial. Ciência e arte a serviço da sua identidade.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Ana Carolina Nogueira",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${blauerNue.variable} ${azuko.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
