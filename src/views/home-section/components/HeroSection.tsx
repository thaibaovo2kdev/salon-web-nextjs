import bg2 from "@/assets/images/bg-header-2.png";
import bg3 from "@/assets/images/bg-header-3.png";
import bg from "@/assets/images/bg1.png";
import logo from "@/assets/images/logo.png";
import gcIcon from "@/assets/images/GC Icon.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MapPinIcon, MenuIcon, PhoneIcon, X as XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function HeroSection(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const backgrounds = [bg, bg2, bg3];
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOnScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation menu items data
  const navItems = [
    { label: "HOME", active: true, path: "/" },
    { label: "INNOVATION", active: false, path: "/innovation" },
    { label: "SERVICES", active: false, path: "/services" },
    // { label: "GALLERY", active: false, path: "/gallery" },
    { label: "POLICIES", active: false, path: "/policies" },
    { label: "CONTACT US", active: false, path: "/contact-us" },
  ];
  return (
    <section className="relative w-full h-[208px] md:h-[500px]">
      {backgrounds.map((background, index) => (
        <div
          key={index}
          className="absolute inset-0 h-full w-full transition-opacity duration-1000"
          style={{
            opacity: currentBgIndex === index ? 1 : 0,
          }}
        >
          <Image
            src={background}
            alt={`Background ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-[url(/rectangle-3.png)] bg-cover bg-center">
            <div className="h-full w-full bg-gradient-to-b from-black/87 via-black/14 to-black/76" />
          </div>
        </div>
      ))}
      <div className="fixed top-[200px] right-0 z-[100] w-fit flex flex-col gap-2 pt-6 px-2 justify-between items-end w-[60px]">
        <Link href="https://www.topcardsolution.com/" target="_blank" className="flex flex-col items-end gap-1 ">
            <Image src={gcIcon} alt="Gift Card" width={80} height={32} className="object-contain" />
        </Link>
        <a href="/contact-us" className="bg-[#F5A3B7] rounded-lg w-[40px] h-[40px] flex items-center justify-center mr-1"><PhoneIcon className="w-6 h-6 text-white" /></a>
        {/* <a href="https://www.google.com/maps?ll=39.192107,-84.235196&z=15&t=m&hl=vi&gl=US&mapclient=embed&cid=8259580881427948819" target="_blank" className="bg-[#F5A3B7] rounded-lg w-[40px] h-[40px] flex items-center justify-center"><MapPinIcon className="w-6 h-6 text-white" /></a> */}

      </div>

      {/* Header content */}
      <div className={`fixed top-0 left-0 right-0 z-[99] flex md:hidden pt-6 px-6 justify-between w-full ${onScroll ? "bg-black/50 pb-8 transition-all duration-300 ease-in-out" : "bg-transparent transition-all duration-300 ease-out"}`}>
        <Image className="object-cover" alt="Logo" src={logo} width={90} height={44} priority />
        <MobileNavigation />
      </div>
      <div className={`fixed z-[99] top-0 left-0 right-0 hidden md:flex items-center justify-between md:px-[40px] lg:px-[162px] pt-6 ${onScroll ? "bg-black/50 pb-8 transition-all duration-300 ease-in-out" : "bg-transparent transition-all duration-300 ease-out"}`}>
        {/* Logo */}
        <Image className="object-cover" alt="Logo" src={logo} width={90} height={44} priority />

        {/* Navigation */}
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label} className="cursor-pointer">
                <NavigationMenuLink
                  href={item.path}
                  className={`hover:text-pink-300 transition-colors font-desktop-body-paragraph-reg text-[length:var(--desktop-body-paragraph-reg-font-size)] tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] leading-[var(--desktop-body-paragraph-reg-line-height)] whitespace-nowrap ${
                    pathname === item.path ? "text-[#F5A3B7]" : "text-white"
                  }`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="https://www.topcardsolution.com/" target="_blank" className="mx-2">
          <button
            className="relative overflow-hidden rounded-full px-4 py-1.5 transition-all duration-300 ease-in-out bg-black hover:bg-black/80"
          >
            <span
              className="font-medium tracking-wider font-desktop-body-subtitle-reg text-[length:var(--desktop-body-subtitle-reg-font-size)] tracking-[var(--desktop-body-subtitle-reg-letter-spacing)] leading-[var(--desktop-body-subtitle-reg-line-height)] text-white"
            >
              GIFT CARD
            </span>
          </button>
        </Link>

        {/* Book Now Button */}
        <Button
          onClick={() => {
            // window !== undefined && window.open("https://lk.macmarketing.us/beautiquebooking", "_blank")
            router.push("/contact-us")
          }}
          className="px-3 py-1.5 rounded-2xl bg-[#F5A3B7] hover:bg-white text-black font-desktop-body-subtitle-reg text-[length:var(--desktop-body-subtitle-reg-font-size)] tracking-[var(--desktop-body-subtitle-reg-letter-spacing)] leading-[var(--desktop-body-subtitle-reg-line-height)]"
        >
          BOOK NOW
        </Button>
      </div>
    </section>
  );
}

function MobileNavigation(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = [
    { label: "HOME", path: "/" },
    { label: "INNOVATION", path: "/innovation" },
    { label: "SERVICES", path: "/services" },
    { label: "GALLERY", path: "/gallery" },
    { label: "POLICIES", path: "/policies" },
    { label: "CONTACT US", path: "/contact-us" },
  ];
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M5 10H35"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 20H35"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 30H35"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="bg-neutralblack h-full flex flex-col items-end p-6 pb-[410px]">
          <SheetClose className="mb-4">
            <XIcon className="w-[42px] h-[42px] text-white" />
          </SheetClose>
          <nav className="flex flex-col items-start gap-4 w-full">
            {navigationItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <button
                  className="flex items-center w-full pb-4"
                  onClick={() => {
                    router.push(item.path);
                    setIsOpen(false);
                  }}
                >
                  <span className="font-mobile-body-para-16-reg text-white text-[16px] leading-[150%]">
                    {item.label}
                  </span>
                </button>
                {index < navigationItems.length - 1 && (
                  <Separator className="w-full border-text-6 border-b-[0.5px]" />
                )}
              </React.Fragment>
            ))}
            <div className="flex flex-row items-center gap-3 w-full">
              <Button onClick={() => {
                router.push("/contact-us");
                setIsOpen(false);
              }} className="px-3 py-1.5 rounded-2xl bg-[#F5A3B7] hover:bg-white text-black font-desktop-body-subtitle-reg text-[length:var(--desktop-body-subtitle-reg-font-size)] tracking-[var(--desktop-body-subtitle-reg-letter-spacing)] leading-[var(--desktop-body-subtitle-reg-line-height)] flex-1">
                BOOK NOW
              </Button>
              <Link 
                href="https://www.topcardsolution.com/" 
                target="_blank" 
                className="flex flex-col items-center gap-2 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <Image src={gcIcon} alt="Gift Card" width={80} height={32} className="object-contain" />
               
              </Link>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
