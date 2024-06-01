import Loader from "@/components/loader/loading-page.js";
import { Providers } from "@/lib/providers";
import Fonts from "@/styles/fonts";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://CarolaQuince.com"),
  title: "Invitacion a mi Cumple",
  description: "Invitacion",
  keywords: "Invitacion",
  robots: "index,follow",
  openGraph: {
    title: "Caru Toledo - Mis 15 Años",
    description: "Invitacion",
    url: "https://CarolaQuince.com",
    type: "website",
    image: "https://utfs.io/f/1f738f9e-8b7b-4aef-ad5f-4b86edd8257a-a92hiv.jpg",
    site_name: "Caru Toledo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
