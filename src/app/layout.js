import Loader from "@/components/loader/loading-page.js";
import { Providers } from "@/lib/providers";
import ogImage from "../../public/images/caru.jpg";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://carola-quince.vercel.app/"),
  title: "Invitacion a mi Cumple",
  description: "Invitacion",
  keywords: "Invitacion",
  robots: "index,follow",
  openGraph: {
    title: "Caru Vlach - Mis 15 Años",
    description: "Invitacion Menores",
    url: "https://carola-quince.vercel.app/",
    type: "website",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
    site_name: "Caru Toledo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Providers>
          <Loader>{children}</Loader>
        </Providers>
      </body>
    </html>
  );
}
