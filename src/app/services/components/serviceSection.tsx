'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Snowflake } from "lucide-react";
import React, { useState } from "react";
import ice1 from "@/assets/images/ice1.png";
import service1 from "@/assets/images/services/service-1.png";
export default function ServicesSection() {
  const navItems = [
    { name: "HOME", active: false },
    { name: "INNOVATION", active: false },
    { name: "SERVICES", active: true },
    { name: "GALLERY", active: false },
    { name: "POLICIES", active: false },
    { name: "CONTACT US", active: false },
  ];
  const [activeTab, setActiveTab] = useState("Botanical Pedicure");

  const serviceTabs = [
    { name: "Botanical Pedicure", active: true },
    { name: "Pedicure", active: false },
    { name: "Manicure", active: false },
    { name: "Dipping Powder (SNS)", active: false },
    { name: "Acrylic Nails", active: false },
    { name: "Pink & White", active: false },
    { name: "Kid Services", active: false },
    { name: "MISC Services", active: false },
    { name: "Waxing", active: false },
    { name: "Build Gel", active: false },
  ];

  const serviceCards = [
    {
      title: "Beautique Botanical",
      description: "Submerge your feet in the ULTIMATE Water-massage Experience. Nail trim, ...",
      price: "$67",
      rating: 5,
      image: service1.src,
    },
    {
      title: "Standard Botanical",
      description: "Includes fizzing tablet soak, nail trim, shape & buff, cuticle groom & callus smo...",
      price: "$47",
      rating: 5,
      image: service1.src,
    },
    {
      title: "Signature Botanical",
      description: "Includes fizzing tablet soak, nail trim, shape & buff, cuticle gVoom & callus sm...",
      price: "$61",
      rating: 5,
      image: service1.src,
    },
    {
      title: "Royal Botanical",
      description: "All of the same luxurious treatment as the Beautique Pedicure, enhanced with...",
      price: "$75",
      rating: 5,
      image: service1.src,
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 w-full py-20">
      <div className="flex flex-col w-full max-w-[1117px] items-start gap-20 px-4 md:px-0">
        <div className="flex flex-col items-center gap-6 max-w-[1117px] mx-auto">
              <img
                className="w-[73px] h-[73px]"
                alt="Ice crystals"
                src={ice1.src}
              />
              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="font-desktop-header-h2 text-red text-[40px] md:text-[60px] leading-[150%]">
                Services
                </h2>
                <p className="font-desktop-body-paragraph-reg text-black text-[16px] leading-[150%] max-w-[1117px]">
                Bring your pedicure to the next level with benefit from the products.
                </p>
              </div>
            </div>
        <div className="flex flex-col items-start gap-8 w-full">
          <div className="w-full max-w-screen">
            <Tabs defaultValue="Botanical Pedicure" className="w-full">
              <TabsList className="flex flex-row justify-start w-full h-auto bg-transparent gap-2 max-w-screen overflow-x-auto">
                {serviceTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.name}
                    value={tab.name}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap font-desktop-body-subtitle-reg text-[length:var(--desktop-body-subtitle-reg-font-size)] tracking-[var(--desktop-body-subtitle-reg-letter-spacing)] leading-[var(--desktop-body-subtitle-reg-line-height)] ${
                      tab.name === activeTab ? "!bg-red !text-neutralwhite" : "bg-transparent text-neutralblack border border-solid border-red"
                    }`}
                    onClick={() => setActiveTab(tab.name)}
                  >
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {serviceCards.map((service, index) => (
              <Card key={index} className="bg-[#f5a3b733] rounded-2xl border-none overflow-hidden">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="w-full h-[186px] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${service.image})` }} />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-desktop-body-para-20-med text-red text-[length:var(--desktop-body-para-20-med-font-size)] tracking-[var(--desktop-body-para-20-med-letter-spacing)] leading-[var(--desktop-body-para-20-med-line-height)]">
                        {service.title}
                      </h3>
                      <p className="font-desktop-body-paragraph-reg text-neutralblack text-[length:var(--desktop-body-paragraph-reg-font-size)] tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] leading-[var(--desktop-body-paragraph-reg-line-height)] h-12">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-desktop-body-para-20-med text-red text-[length:var(--desktop-body-para-20-med-font-size)] tracking-[var(--desktop-body-para-20-med-letter-spacing)] leading-[var(--desktop-body-para-20-med-line-height)]">
                        {service.price}
                      </span>
                      <div className="flex">
                        {[...Array(service.rating)].map((_, i) => (
                          <span key={i} className="text-pink">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}