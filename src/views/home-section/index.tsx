import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialSection";

export default function HomeSection(): JSX.Element {
  return (
    <main className="bg-app-background min-h-screen w-full">
      <div className="max-w-screen mx-auto">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
      </div>
    </main>
  );
}
