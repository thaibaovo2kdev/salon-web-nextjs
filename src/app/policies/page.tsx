"use client";

import HeroSection from "@/views/home-section/components/HeroSection";
import TestimonialsSection from "@/views/home-section/components/TestimonialSection";
import PoliciesSection from "./components/policies";

export default function Policies() {
  return <main className="bg-app-background min-h-screen w-full">
      <div className="max-w-screen mx-auto">
        <HeroSection />
        <PoliciesSection />
        <TestimonialsSection />
      </div>
    </main>
}

