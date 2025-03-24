"use client";

import HeroSection from "@/views/home-section/components/HeroSection";
import ServicesSection from "./components/serviceSection";
import TestimonialsSection from "@/views/home-section/components/TestimonialSection";

export default function Services() {
  return <main className="bg-app-background min-h-screen w-full">
      <div className="max-w-screen mx-auto">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
      </div>
    </main>
}

