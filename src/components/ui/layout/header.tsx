import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo.png";
import bg from "@/assets/images/bg1.png";
import menuIcon from "@/assets/icons/align-justify.png";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface IHeaderProps {}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function GiftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}
const navItems = [
  { label: "HOME", active: true },
  { label: "INNOVATION", active: false },
  { label: "SERVICES", active: false },
  { label: "GALLERY", active: false },
  { label: "POLICIES", active: false },
  { label: "CONTACT US", active: false },
];

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const router = useRouter();
  return (
    <header className="relative w-full h-[300px] md:h-[800px]">
      <div className="h-full w-full relative">
        <Image
          src={bg}
          alt="Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Background image with overlay */}
        {/* <div className="absolute inset-0 bg-[url(/rectangle-3.png)] bg-cover bg-center">
          <div className="h-full w-full bg-gradient-to-b from-black/87 via-black/14 to-black/76" />
        </div> */}
        <div className="flex md:hidden py-4 px-8">
          <Image
            className="object-cover"
            alt="Logo"
            src={logo}
            width={90}
            height={44}
            priority
          />
          <Drawer >
            <DrawerTrigger>
              <Button variant="outline" className="bg-transparent">
                <Image src={menuIcon} alt="Menu" width={40} height={40} priority/>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Header content */}
        <div className="relative hidden md:flex items-center justify-between px-8 md:px-[162px] pt-6">
          {/* Logo */}
          <Image
            className="object-cover"
            alt="Logo"
            src={logo}
            width={90}
            height={44}
            priority
          />

          {/* Navigation */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex items-center gap-6">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    className={`font-desktop-body-paragraph-reg text-[length:var(--desktop-body-paragraph-reg-font-size)] tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] leading-[var(--desktop-body-paragraph-reg-line-height)] whitespace-nowrap ${
                      item.active ? "text-[#F5A3B7]" : "text-white"
                    }`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Book Now Button */}
          <Button onClick={()=> {
            // window !== undefined && window.open("https://lk.macmarketing.us/beautiquebooking", "_blank")
            router.push("/contact-us")
          }} className="px-3 py-1.5 rounded-2xl bg-[#F5A3B7] hover:bg-white text-black font-desktop-body-subtitle-reg text-[length:var(--desktop-body-subtitle-reg-font-size)] tracking-[var(--desktop-body-subtitle-reg-letter-spacing)] leading-[var(--desktop-body-subtitle-reg-line-height)]">
            BOOK NOW
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
