import logo from "@/assets/images/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import contactus1 from "@/assets/images/contact-us-1.png";
import contactus2 from "@/assets/images/contact-us-2.png";

export default function TestimonialsSection(): JSX.Element {
  // Business hours data
  const businessHours = [
    "Mon - Fri: 9:00 AM - 8:00 PM",
    "Saturday: 9:00 AM - 7:00 PM",
    "Sunday: 11:00 AM - 6:00 PM",
  ];

  // Location data for salon branches
  const locations = [
    {
      name: "BEAUTIQUE 1 (MULBERRY SQUARE)",
      image: contactus1,
      address: "1083 State Route 28, Ste B Milford, OH 45150",
      phone: "(513) 268 - 7777",
      email: "info@beautiquenailspa.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.2350817367665!2d-84.2351963!3d39.1921068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x729fed0cef1ee513!2sBeautique%20Nails%20%26%20Spa!5e0!3m2!1svi!2s!4v1658724110840!5m2!1svi!2s",
    },
    {
      name: "BEAUTIQUE 2 (OLD MILFORD)",
      image: contactus2,
      address: "796 Main St, Ste B Milford, OH 45150",
      phone: "(513)987-9999",
      email: "oldmilford@beautiquenailspa.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.2350817367665!2d-84.2836977!3d39.1773219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841abfc00273149%3A0x6415e5ee5a20cb64!2sBeautique%20Nail%20Spa%202%20(Old%20Milford)!5e0!3m2!1svi!2s!4v1658724110840!5m2!1svi!2s",
    },
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
        <div className="bg-[#151515] pt-10 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-10 lg:gap-16 mb-12 items-start justify-center md:justify-center">
              {/* Logo and contact info */}
              <div className="flex items-center md:items-start flex-col gap-4">
                <div className="w-[200px] relative">
                  <Image
                    className="object-contain"
                    alt="Logo"
                    src={logo}
                    width={200}
                    height={97}
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col items-center md:items-start gap-4">
                  <h3 className="text-white text-xl font-medium">
                    Business Hours
                  </h3>
                  <div className="flex flex-col gap-4">
                    {businessHours.map((item, index) => (
                      <div key={index} className="text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business hours */}

              {/* Locations with maps */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-16 pt-8">
                {locations.map((location, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <h3 className="text-white text-xl font-medium">
                      {location.name}
                    </h3>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-2">
                        <MapPinIcon className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-white text-sm">
                          {location.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="w-5 h-5 text-white flex-shrink-0" />
                        <span className="text-white text-sm">
                          {location.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MailIcon className="w-5 h-5 text-white flex-shrink-0" />
                        <span className="text-white text-sm">
                          {location.email}
                        </span>
                      </div>
                    </div>
                    <Card className="w-full max-w-[250px] h-44 overflow-hidden">
                      <CardContent className="p-0">
                        <iframe
                          src={location.mapUrl}
                          width="100%"
                          height="176"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </CardContent>
                    </Card>
                  </div>
                ))}
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
