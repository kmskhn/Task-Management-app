import { Inter } from "next/font/google";
import "./globals.css";
import { UserNav } from "./(dashboard)/tasks/components/user-nav";
import Link from "next/link";
import Footer from "@/components/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task Manager",
  description: "Task Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gradient-to-b from-black/90 to-transparent text-white py-4">
          <div class="container flex items-center justify-between">
            <Link
              href="https://www.smartdubai.ae/"
              target="_blank"
              aria-label="Dubai Government Logo"
              class="dda-main-header__gov-logo"
            >
              <Image
                width="200"
                height={"200"}
                src="https://d2ysif0spfh53o.cloudfront.net/wp-content/themes/dubaimunicipality/assets/images/logo-2-gov.svg"
              />
            </Link>
            <Link href="https://www.dm.gov.ae/" aria-label="Dubai Municipality">
              <Image
              width="200"
                height={"200"}
                target="_blank"
                src="https://d2ysif0spfh53o.cloudfront.net/wp-content/themes/dubaimunicipality/assets/images/dmLogo.svg"
                class="dda-main-header__logo"
                alt="Dubai Municipality logo"
              />
            </Link>
          </div>
        </header>
        {children}
     

        <Footer/>
      </body>
    </html>
  );
}
