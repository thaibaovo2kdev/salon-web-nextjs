import logo from "@/assets/images/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import Map from "@/components/ui/map";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  Twitter,
} from "lucide-react";

export default function TestimonialsSection(): JSX.Element {
  // Business hours data
  const businessHours = [
    { day: "Mon - Fri", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "11:00 AM - 6:00 PM" },
  ];

  // Social media links
  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, url: "https://www.facebook.com/beautiquenailspa45150/" },
    { icon: <Instagram className="h-6 w-6" />, url: "https://www.instagram.com/beautiquenailspa45150/" },
    { icon: <Twitter className="h-6 w-6" />, url: "https://twitter.com/beautique45150" },
  ];

  return (
    <footer className="relative w-full">
      <div className="relative w-full">
        {/* Decorative elements */}
        {/* <div className="absolute top-0 right-[257px] w-[200px] h-[196px]">
          <div className="w-full h-full bg-pink rounded-full opacity-20"></div>
        </div> */}

        {/* Main content section */}
        {/* <div className="pt-24 pb-0 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-[#151515] text-4xl font-bold mb-8">
              Welcome to Beautique Nails &amp; Spa
            </h2>

            <Button className="bg-pink text-neutralblack hover:bg-pink/90 rounded-[32px] px-8 py-4 text-lg font-medium">
              BOOK NOW
            </Button>
          </div>
        </div> */}

        {/* Footer dark section */}
        <div className="bg-[#151515] pt-16 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-10 lg:gap-[175px] mb-12 items-center justify-center md:justify-between">
              {/* Logo and contact info */}
              <div className="flex items-center md:items-start flex-col gap-4">
                <div className="w-[200px] h-[97px] relative mb-4">
                  <Image
                    className="object-cover"
                    alt="Logo"
                    src={logo}
                    width={200}
                    height={97}
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-6 h-6 text-white" />
                    <span className="text-white">
                      1083 State Route 28, Ste B Milford, OH 45150
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-6 h-6 text-white" />
                    <span className="text-white">(513) 268 - 7777</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MailIcon className="w-6 h-6 text-white" />
                    <span className="text-white">
                      info@beautiquenailspa.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Business hours */}
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-white text-xl font-medium">
                    Business Hours
                  </h3>
                  <div className="flex flex-col gap-4">
                    {businessHours.map((item, index) => (
                      <div key={index} className="text-white">
                        {item.day}: {item.hours}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-white text-xl font-medium">Social</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="text-white hover:text-pink transition-colors"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map section */}
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-white text-xl font-medium">
                  Get Direction
                </h3>
                <Card className="w-[250px] h-44 overflow-hidden">
                  <CardContent className="p-0">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.2350817367665!2d-84.2351963!3d39.1921068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x729fed0cef1ee513!2sBeautique%20Nails%20%26%20Spa!5e0!3m2!1svi!2s!4v1658724110840!5m2!1svi!2s"
                      width="600"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Footer bottom */}
            <Separator className="bg-white/20 mb-4" />
            <div className="flex justify-between items-center text-white">
              <div className="flex gap-12">
                <a href="/policies" className="hover:underline">
                  Privacy policy
                </a>
                <a href="/policies" className="hover:underline">
                  Terms &amp; conditions
                </a>
              </div>
              <div>© Copyright 2025.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
