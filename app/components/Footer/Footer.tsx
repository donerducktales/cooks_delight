import { links } from "@/app/assets/navLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`footer w-full bg-background flex flex-col items-center`}
    >
      <div
        className={`footerContainer max-w-[1313px] w-[calc(100%-32px)] min-h-[136px] max-md:h-[369px] mx-4 rounded-[40px] bg-dark mb-10 flex flex-col items-center`}
      >
        <nav
          className={
            "footerNav w-[calc(100%-80px)] flex max-md:flex-col max-md:gap-6 justify-between items-center mt-6 pb-6 text-background border-b border-solid border-background border-opacity-10"
          }
        >
          <div className={`footerNavLogo flex gap-2`}>
            <Image
              src={"/Footer/white-logo.svg"}
              alt="white footer logo"
              width={40}
              height={35}
            />
            <p className="w-[50px] text-sm">Cooks Delight</p>
          </div>
          <ul
            className={`footerNavLinks flex max-md:flex-col max-md:w-full max-md:justify-start md:divide-x-2 max-md:divide-y-2 md:gap-4 gap-2`}
          >
            {links.map((link) => (
              <li
                key={link.id}
                className="text-sm font-normal uppercase md:pl-4 pt-2 border-solid border-background border-opacity-10"
              >
                <Link className="text-background" href={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`footerNavSocialMedia flex items-center gap-4`}>
            <Image
              src={"/Header/facebook-logo.png"}
              alt="facebook logo"
              width={20}
              height={20}
            />
            <Image
              src={"/Header/insta-logo.png"}
              alt="instagram logo"
              width={20}
              height={20}
            />
            <Image
              src={"/Header/yt-logo.png"}
              alt="youtube logo"
              width={20}
              height={20}
            />
          </div>
        </nav>
        <div className={`footerCopyright mt-4`}>
          <p className="text-xs font-medium uppercase text-background text-opacity-60">
            Copyright: © 2024 Cooks Delight.
          </p>
        </div>
      </div>
    </footer>
  );
}
