import bg2 from "@/assets/images/bg-header-2.png";
import bg3 from "@/assets/images/bg-header-3.png";
import bg from "@/assets/images/bg1.png";
import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, X as XIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function HeroSection(): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const backgrounds = [bg, bg2, bg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Navigation menu items data
  const navItems = [
    { label: "HOME", active: true, path: "/" },
    { label: "INNOVATION", active: false, path: "/innovation" },
    { label: "SERVICES", active: false, path: "/services" },
    { label: "GALLERY", active: false, path: "/gallery" },
    { label: "POLICIES", active: false, path: "/policies" },
    { label: "CONTACT US", active: false, path: "/contact-us" },
  ];
  return (
    <section className="relative w-full h-[208px] md:h-[800px]">
      {backgrounds.map((background, index) => (
        <div
          key={index}
          className="absolute inset-0 h-full w-full transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentBgIndex === index ? 1 : 0,
          }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-[url(/rectangle-3.png)] bg-cover bg-center">
            <div className="h-full w-full bg-gradient-to-b from-black/87 via-black/14 to-black/76" />
          </div>
        </div>
      ))}

      {/* Header content */}
      <div className="relative z-[40] flex md:hidden pt-6 px-6 justify-between w-full">
      <img className="w-[90px] h-11 object-cover" alt="Logo" src={logo.src} />
        <MobileNavigation/>
      </div>
      <div className="relative hidden md:flex items-center justify-between md:px-[40px] lg:px-[162px] pt-6">
        {/* Logo */}
        <img className="w-[90px] h-11 object-cover" alt="Logo" src={logo.src} />

        {/* Navigation */}
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label} className="cursor-pointer">
                <NavigationMenuLink
                  className={`font-desktop-body-paragraph-reg text-[length:var(--desktop-body-paragraph-reg-font-size)] tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] leading-[var(--desktop-body-paragraph-reg-line-height)] whitespace-nowrap ${
                    pathname === item.path ? "text-[#F5A3B7]" : "text-white"
                  }`}
                  onClick={() => router.push(item.path)}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Book Now Button */} 
        <Button className="px-3 py-1.5 rounded-2xl bg-[#F5A3B7] hover:bg-white text-black font-desktop-body-subtitle-reg text-[length:var(--desktop-body-subtitle-reg-font-size)] tracking-[var(--desktop-body-subtitle-reg-letter-spacing)] leading-[var(--desktop-body-subtitle-reg-line-height)]">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M5 10H35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 20H35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 30H35" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
            <button className="flex items-center w-full pb-4"
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
        <Button className="px-3 py-1.5 rounded-2xl bg-[#F5A3B7] hover:bg-white text-black font-desktop-body-subtitle-reg text-[length:var(--desktop-body-subtitle-reg-font-size)] tracking-[var(--desktop-body-subtitle-reg-letter-spacing)] leading-[var(--desktop-body-subtitle-reg-line-height)]">
            BOOK NOW
        </Button>
      </nav>
    </div>
      </SheetContent>
    </Sheet>
  );
}
