import localFont from "next/font/local";
import { Teko } from "next/font/google";

const iranSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/IRANSansXFaNum-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    { path: "../../public/assets/fonts/IRANSansXFaNum-Regular.ttf", weight: "400" },
  ],
  variable: "--font-iran-sans",
  display: "swap",
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export { iranSans, teko };
