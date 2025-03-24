'use client'
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/views/home-section/components/HeroSection";
import TestimonialsSection from "@/views/home-section/components/TestimonialSection";
import { Facebook, Instagram } from "lucide-react";
import ice1 from "@/assets/images/ice1.png";
import gallery1 from "@/assets/images/gallery/gallery-1.png";
export default function Gallery(): JSX.Element {
  const navItems = [
    { label: "HOME", href: "#", active: false },
    { label: "INNOVATION", href: "#", active: false },
    { label: "SERVICES", href: "#", active: false },
    { label: "GALLERY", href: "#", active: true },
    { label: "POLICIES", href: "#", active: false },
    { label: "CONTACT US", href: "#", active: false },
  ];

  const galleryImages = [
    { src: gallery1.src, alt: "Nail design 1" },
    { src: gallery1.src, alt: "Nail design 2" },
    { src: gallery1.src, alt: "Nail design 3" },
    { src: gallery1.src, alt: "Nail design 4" },
    { src: gallery1.src, alt: "Nail design 5" },
    { src: gallery1.src, alt: "Nail design 6" },
    { src: gallery1.src, alt: "Nail design 7" },
    { src: gallery1.src, alt: "Nail design 8" },
    { src: gallery1.src, alt: "Nail design 9" },
    { src: gallery1.src, alt: "Nail design 10" },
    { src: gallery1.src, alt: "Nail design 11" },
    { src:  gallery1.src, alt: "Nail design 12" },
    { src: gallery1.src, alt: "Nail design 13" },
    { src: gallery1.src, alt: "Nail design 14" },
    { src: gallery1.src, alt: "Nail design 15" },
    { src: gallery1.src, alt: "Nail design 16" },
  ];

  const businessHours = [
    "Mon - Fri: 9:00 AM - 8:00 PM",
    "Saturday: 9:00 AM - 7:00 PM",
    "Sunday: 11:00 AM - 6:00 PM",
  ];

  const socialIcons = [
    { icon: <Facebook className="w-6 h-6" />, href: "#" },
    { icon: <Instagram className="w-6 h-6" />, href: "#" },
    {
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="w-5 h-5 bg-contain bg-center bg-no-repeat" />
        </div>
      ),
      href: "#",
    },
    {
      icon: (
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="w-[17px] h-[22px] bg-contain bg-center bg-no-repeat" />
        </div>
      ),
      href: "#",
    },
  ];

  return (
    <div className="bg-[#f9fafc] flex flex-row justify-center w-full">
      <div className="bg-app-background overflow-hidden w-full">
       <HeroSection />
        <main className="container mx-auto px-4 flex flex-col items-center">
          <section className="flex flex-col items-center gap-20 py-20 w-full max-w-[1117px]">
            <div className="flex flex-col items-center gap-6 max-w-[1117px] mx-auto">
              <img
                className="w-[73px] h-[73px]"
                alt="Ice crystals"
                src={ice1.src}
              />
              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="font-desktop-header-h2 text-red text-[40px] md:text-[60px] leading-[150%]">
                Gallery
                </h2>
                <p className="font-desktop-body-paragraph-reg text-black text-[16px] leading-[150%] max-w-[1117px]">
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {galleryImages.map((image, index) => (
                <Card key={index} className="border-0 rounded-none overflow-hidden p-0">
                  <CardContent className="p-0">
                    <img className="w-full h-[261px] object-cover" alt={image.alt} src={image.src} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
        <TestimonialsSection />
      </div>
    </div>
  );
}