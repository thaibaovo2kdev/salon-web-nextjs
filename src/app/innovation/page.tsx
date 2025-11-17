"use client";
import ice1 from "@/assets/images/ice1.png";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/views/home-section/components/HeroSection";
import TestimonialsSection from "@/views/home-section/components/TestimonialSection";
import Image from "next/image";
import homee from "@/assets/images/home-e.png";
import homeTru from "@/assets/images/home-tru.png";
import homeDual from "@/assets/images/home-dual.png";
import home4 from "@/assets/images/home-4.png";
import innovation1 from "@/assets/images/innovation/11 1.png";
import innovation2 from "@/assets/images/innovation/12 1.png";
import innovation3 from "@/assets/images/innovation/13 1.png";
import innovation4 from "@/assets/images/innovation/14 1.png";
export default function Innovation() {
  const navItems = [
    { label: "HOME", active: false },
    { label: "INNOVATION", active: true },
    { label: "SERVICES", active: false },
    { label: "GALLERY", active: false },
    { label: "POLICIES", active: false },
    { label: "CONTACT US", active: false },
  ];

  const features = [
    {
      id: 1,
      image: innovation1,
      icon: homeDual,
      title: "DUAL-JET™",
      subtitle: "HYDRO-MASSAGE SYSTEM",
      description:
        "Submerge your feet in the ULTIMATE Water-massage Experience! Powered by ECOJET®—the strong, powerful Water-Jet is now accompanied by its complementary softer, soothing Air-Jet for a complete, holistic foot water-massage",
    },
    {
      id: 2,
      image: innovation2,
      icon: homeTru,
      title: "TRU-TOUCH™",
      subtitle: "SHIATSU MASSAGE MECHANISM",
      description:
        "Utilizing three (3) powerful motors, our advanced Shiatsu Massage System will ensure to indulge and relax you with the most satisfying hand-like massages from neck to lower back.",
    },
    {
      id: 3,
      image: innovation3,
      icon: home4,
      title: "4-WAY POWER CUSHION",
      subtitle: "WITH DUAL-CONTROL",
      description:
        "Whether you are feeling more up-right or would prefer it more relaxed, our Powered Cushion can easily be re-positioned through Dual-Control.",
    },
    {
      id: 4,
      image: innovation4,
      icon: homee,
      title: "ECO-AIR™",
      subtitle: "VENTILATION-READY",
      description:
        "All Lexor® Pedi-Spas come equipped with ECO-AIR™ vents that can easily be attached to existing salon ventilation systems to promote healthier, safer salon environments.",
    },
  ];

  const businessHours = [
    "Mon - Fri: 9:00 AM - 8:00 PM",
    "Saturday: 9:00 AM - 7:00 PM",
    "Sunday: 11:00 AM - 6:00 PM",
  ];

  return (
    <div className="bg-[#f9fafc] flex flex-row justify-center w-full">
      <div className="bg-app-background overflow-hidden w-full">
        <div className="relative">
          <HeroSection />
          <section className="container mx-auto px-4 py-20">
            <div className="flex flex-col items-center gap-6 max-w-[1117px] mx-auto px-6 md:px-0">
              <Image
                className="object-contain"
                alt="Ice crystals"
                src={ice1}
                width={73}
                height={73}
                loading="lazy"
              />
              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="font-desktop-header-h2 text-red text-[40px] md:text-[60px] leading-[150%]">
                  New Innovation of Spa - Pedi Chair
                </h2>
                <p className="font-desktop-body-paragraph-reg text-black text-[16px] leading-[150%] max-w-[1117px]">
                  Made to deliver an incredible service, our NEW pedicure chair
                  has exquisitely crafted UltraLeather® Linen that is
                  sophisticated and luxurious in design. Our new chair is here
                  to take your pedicure experience to the next level so that you
                  can fully immerse yourself in relaxation.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-10 max-w-[1117px] mx-auto mt-20">
              {features.map((feature) => (
                <Card
                  key={feature.id}
                  className="flex flex-col md:flex-row items-center gap-6 w-full border-none shadow-none"
                >
                  <Image
                    className="object-cover"
                    alt={feature.title}
                    src={feature.image}
                    width={451}
                    height={300}
                    loading="lazy"
                  />
                  <CardContent className="flex flex-col w-full md:w-[642px] items-start gap-6 p-0">
                    <div className="flex items-center gap-6">
                      <Image
                        className="object-cover"
                        alt={feature.title}
                        src={feature.icon}
                        width={120}
                        height={120}
                        loading="lazy"
                      />
                      <div className="flex flex-col w-[248px] items-start gap-1">
                        <h3 className="font-desktop-body-para-20-med text-black text-[20px] leading-[150%]">
                          {feature.title}
                        </h3>
                        <p className="font-desktop-body-paragraph-reg text-black text-[16px] leading-[150%]">
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="font-desktop-body-paragraph-reg text-black text-[16px] leading-[150%]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          <TestimonialsSection />
        </div>
      </div>
    </div>
  );
}
