'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList 
} from "@/components/ui/navigation-menu";
import HeroSection from "@/views/home-section/components/HeroSection";
import TestimonialsSection from "@/views/home-section/components/TestimonialSection";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import ice1 from "@/assets/images/ice1.png";
import contactus1 from "@/assets/images/contact-us-1.png";
import contactus2 from "@/assets/images/contact-us-2.png";
// Contact Us page component
export default function ContactUs(): JSX.Element {
  // Navigation menu items configuration
  const navItems = [
    { label: "HOME", href: "#", active: false },
    { label: "INNOVATION", href: "#", active: true },
    { label: "SERVICES", href: "#", active: false },
    { label: "GALLERY", href: "#", active: false },
    { label: "POLICIES", href: "#", active: false },
    { label: "CONTACT US", href: "#", active: false },
  ];

  // Location data for salon branches
  const locations = [
    {
      name: "BEAUTIQUE 1 - MULBERRY SQUARE",
      image: contactus1.src,
      address: "1083 State Route 28, Ste B Milford, OH 45150",
      addressNote: "Same plaza as Kroger and Platnet Fitness",
      phone: "(513) 268 - 7777",
      email: "info@beautiquenailspa.com",
    },
    {
      name: "BEAUTIQUE 2 - OLD MILFORD",
      image: contactus2.src,
      address: "796 Main St, Ste B Milford, OH 45150",
      addressNote: "Same plaza as Kroger (Old Milford)",
      phone: "(513) 987 - 9999",
      email: "oldmilford@beautiquenailspa.com",
    },
  ];

  // Business hours data
  const businessHours = [
    "Mon - Fri: 9:00 AM - 8:00 PM",
    "Saturday: 9:00 AM - 7:00 PM",
    "Sunday: 11:00 AM - 6:00 PM",
  ];

  return (
    // Main container with background and centering
    <div className="bg-[#f9fafc] flex flex-row justify-center w-full">
      <div className="bg-app-background overflow-hidden w-full">
        <div className="relative w-full">
          {/* Hero Section */}
          <HeroSection />

          {/* Contact Us Section */}
          <section className="container mx-auto px-4 py-10 md:py-20">
            <div className="flex flex-col items-center gap-20">
            <div className="flex flex-col items-center gap-6 max-w-[1117px] mx-auto">
              <img
                className="w-[73px] h-[73px]"
                alt="Ice crystals"
                src={ice1.src}
              />
              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="font-desktop-header-h2 text-red text-[40px] md:text-[60px] leading-[150%]">
                Contact Us
                </h2>
                <p className="font-desktop-body-paragraph-reg text-black text-[16px] leading-[150%] max-w-[1117px]">
                </p>
              </div>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1117px]">
                {locations.map((location, index) => (
                  <Card key={index} className="border-none shadow-none">
                    <CardContent className="flex flex-col items-center gap-6 p-0">
                      <h2
                        className="font-desktop-body-para-20-med text-red 
                          text-[length:var(--desktop-body-para-20-med-font-size)] 
                          text-center 
                          tracking-[var(--desktop-body-para-20-med-letter-spacing)] 
                          leading-[var(--desktop-body-para-20-med-line-height)]"
                      >
                        {location.name}
                      </h2>
                      <div className="flex flex-col items-center gap-4 w-full">
                        <img
                          className="w-[356px] h-[312px] object-cover"
                          alt={location.name}
                          src={location.image}
                        />
                        <div className="flex flex-col items-center gap-4 w-full">
                          <div className="flex flex-col w-full pl-20">
                            <p
                              className="text-red font-desktop-body-paragraph-reg 
                                text-[length:var(--desktop-body-paragraph-reg-font-size)] 
                                text-left
                                tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] 
                                leading-[var(--desktop-body-paragraph-reg-line-height)]"
                            >
                              Address:
                            </p>
                            <p
                              className="text-neutralblack font-desktop-body-para-20 
                                text-left
                                tracking-[var(--desktop-body-para-20-letter-spacing)] 
                                leading-[var(--desktop-body-para-20-line-height)]"
                            >
                              {location.address}
                            </p>
                            <p
                              className="text-neutralblack font-desktop-body-paragraph-reg 
                                text-[length:var(--desktop-body-paragraph-reg-font-size)] 
                                text-left
                                tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] 
                                leading-[var(--desktop-body-paragraph-reg-line-height)]"
                            >
                              {location.addressNote}
                            </p>
                          </div>
                          <div className="flex flex-col w-full pl-20">
                            <p
                              className="text-red font-desktop-body-paragraph-reg 
                                text-[length:var(--desktop-body-paragraph-reg-font-size)] 
                                text-left 
                                tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] 
                                leading-[var(--desktop-body-paragraph-reg-line-height)]"
                            >
                              Contact:
                            </p>
                            <p
                              className="text-neutralblack font-desktop-body-para-20 
                                text-left 
                                tracking-[var(--desktop-body-para-20-letter-spacing)] 
                                leading-[var(--desktop-body-para-20-line-height)]"
                            >
                              {location.phone}
                            </p>
                            <p
                              className="text-neutralblack font-desktop-body-para-20 
                                tracking-[var(--desktop-body-para-20-letter-spacing)] 
                                leading-[var(--desktop-body-para-20-line-height)]"
                            >
                              {location.email}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <Button className="bg-red rounded-lg text-neutralwhite font-desktop-body-paragraph-reg">
                          Appointment
                        </Button>
                        <Button className="bg-red rounded-lg text-neutralwhite font-desktop-body-paragraph-reg">
                          Write review
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <TestimonialsSection />
        </div>
      </div>
    </div>
  );
}