"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import ice1 from "@/assets/images/ice1.png";
import Image from "next/image";
import {
  acrylic1,
  acrylic10,
  acrylic11,
  acrylic12,
  acrylic13,
  acrylic14,
  acrylic15,
  acrylic16,
  acrylic17,
  acrylic2,
  acrylic3,
  acrylic4,
  acrylic5,
  acrylic6,
  acrylic7,
  acrylic8,
  acrylic9,
} from "@/assets/images/services/acrylic";
import {
  buildGel1,
  buildGel2,
  buildGel3,
  buildGel4,
  buildGel5,
  buildGel6,
} from "@/assets/images/services/build-gel";
import {
  dipping1,
  dipping2,
  dipping3,
  dipping4,
  dipping5,
} from "@/assets/images/services/dipping";
import {
  kid1,
  kid10,
  kid11,
  kid12,
  kid2,
  kid3,
  kid4,
  kid5,
  kid6,
  kid7,
  kid8,
  kid9,
} from "@/assets/images/services/kid";
import {
  misc1,
  misc10,
  misc11,
  misc12,
  misc13,
  misc14,
  misc15,
  misc16,
  misc17,
  misc18,
  misc19,
  misc2,
  misc20,
  misc21,
  misc3,
  misc4,
  misc5,
  misc6,
  misc7,
  misc8,
  misc9,
} from "@/assets/images/services/misc";
import {
  pedicure1,
  pedicure2,
  pedicure3,
  pedicure4,
  pedicure5,
  pedicure6,
  pedicure7,
} from "@/assets/images/services/pedicure";
import { pink1, pink2, pink3, pink4 } from "@/assets/images/services/pink";
import service1 from "@/assets/images/services/service-1.png";
import {
  wax1,
  wax10,
  wax11,
  wax12,
  wax2,
  wax3,
  wax4,
  wax5,
  wax6,
  wax7,
  wax8,
  wax9,
} from "@/assets/images/services/wax";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("acrylic-nails");

  const serviceTabs = [
    { name: "Botanical Pedicure", active: true, id: "botanical-pedicure" },
    { name: "Pedicure", active: false, id: "pedicure" },
    { name: "Manicure", active: false, id: "manicure" },
    { name: "Hard Gel (builder-gel)", active: false, id: "build-gel" },
    { name: "Dipping Powder (SNS)", active: false, id: "dipping-powder-sns" },
    { name: "Acrylic Nails", active: false, id: "acrylic-nails" },
    { name: "Pink & White", active: false, id: "pink-white" },
    { name: "Kid Services", active: false, id: "kid-services" },
    { name: "MISC Services", active: false, id: "misc-services" },
    { name: "Waxing", active: false, id: "waxing" },
  ];

  const serviceCards = {
    "botanical-pedicure": [
      {
        title: "Beautique Botanical",
        description:
          "Submerge your feet in the ULTIMATE Water-massage Experience. Nail trim, shape & buff, cuticle groom & callus smoother. Sugar Scrub: A rich blend of conditioners and essential oils with heating sensation. Relax with hot stone massage. Mud masque hot wraps made from botanical extracts and EPOCH® SOLE SOLUTION® – a foot-specific formula works on the underlying cause of rough and cracked heels , silky smooth lotion legs massage.",
        price: "$67",
        rating: 5,
        image: service1.src,
      },
      {
        title: "Standard Botanical",
        description:
          "Includes fizzing tablet soak, nail trim, shape & buff, cuticle groom & callus smoother. Sugar Scrub: A rich blend of conditioners and essential oil exfoliant. Mud masque hot wraps made from botanical extracts and natural ingredients, silky smooth lotion legs massage.",
        price: "$47",
        rating: 5,
        image: service1.src,
      },
      {
        title: "Signature Botanical",
        description:
          "Includes fizzing tablet soak, nail trim, shape & buff, cuticle gVoom & callus smoother. Sugar Scrub: A rich blend of conditioners and essential oil exfoliant. Relax with hot stone massage. Mud masque hot wraps made from botanical extracts and natural ingredients, silky smooth lotion legs massage",
        price: "$61",
        rating: 5,
        image: service1.src,
      },
      {
        title: "Royal Botanical",
        description:
          "All of the same luxurious treatment as the Beautique Pedicure, enhanced with nourishing COLLAGEN SOCKS for the hands. Say less!",
        price: "$75",
        rating: 5,
        image: service1.src,
      },
    ],
    pedicure: [
      {
        title: "Basic Pedicure",
        description:
          "Includes nail nail trim, shape & buff, cuticle groom & callus smoother as well as lotion massage, hot towel wrap and regular polish color of your choice.",
        price: "$35",
        rating: 5,
        image: pedicure1.src,
      },
      {
        title: "Scrub Exfoliating Pedicure",
        description:
          "Includes nail trimming, shaping, buffing, cuticle grooming, callus treatment, citrus scrub massage, hot towel wrap and regular polish of your choice.",
        price: "$42",
        rating: 5,
        image: pedicure2.src,
      },
      {
        title: "Deluxe Pedicure",
        description:
          "Includes nail trimming, shaping, buffing, cuticle grooming, callus treatment, and citrus scrub exfoliation, a hot stone massage with vitamin oil, hot towel wrap and regular polish of your choice.",
        price: "$47",
        rating: 5,
        image: pedicure3.src,
      },
      {
        title: "Gel Manicure with Gel Color",
        description: "Basic manicure with Gel Color.",
        price: "$35",
        rating: 5,
        image: pedicure4.src,
      },
      {
        title: "Iron Man Pedicure",
        description:
          "Our Iron Man Pedicure was created expressly for men, but ladies are most welcome to the experience. First, soak your feet in Organic Sea Salt to help soften the skin. Trim and buff your nails along with cuticle care, iron out your calluses and relish in a Citrus scrub Exfoliation. Relax with hot stones and vitamin oils. Finally, a hot towel wrap with Marine Maske™ Spearmint Eucalyptus and optional regular polish of your choice.",
        price: "$65",
        rating: 5,
        image: pedicure5.src,
      },
      {
        title: "Ultimate Pedicure",
        description:
          "Includes soaking your feet in Organic Sea Salt to help soften break down dead skin. Nails are trim, shape, and buff along with cuticle care and callus smoother. Exfoliate and hydrate your skin with Honey Pearl Sugar Cane. Relax with a hot stone massage. Finally, rejuvenate your skin with rich Collagen Honey Pearl Cream Mask hot towels wrap and a Paraffin Hot Wax treatment for the feet.",
        price: "$30",
        rating: 5,
        image: pedicure6.src,
      },
      {
        title: "Gel Polish Change/Feet with Gel Color",
        description: <div>Add $20 for Upgrade Gel/Shellac <br/>
        Add $15 for an Extra 10 mins of massage <br/>
        Add $7 for White French <br/>
        Add $ 12 for Collagen Cream Mask <br/>
        Add $10 for Color French <br/>
        Add $12 for Paraffin Treatment <br/>
        $3/ea for 3rd color and more <br/>
        Add $14 for Collagen Socks<br/>
        </div>,
        price: "$35",
        rating: 5,
        image: pedicure7.src,
      },
    ],
    manicure: [
      {
        title: "Gel/Shellac Manicure",
        description:
          "Our Basic manicure includes nail trimming, shaping, cuticle grooming, lotion massage, hot towels and GEL polish color of your choice.",
        price: "$42",
        rating: 5,
        image: pedicure1.src,
      },
      {
        title: "Biab Gel Manicure",
        description:
          "BIAB Gel creates a layer of protection that allows nails to grow steadily by lessening the chances of breakage. It helps to reinforce the strength and durability of your natural nails. BIAB gel manicures are highly recommended for clients with weak, brittle nails or any client who struggles to grow their nails.",
        price: "$50",
        rating: 5,
        image: buildGel6.src,
      },
      {
        title: "Beautique Manicure",
        description:
          "First, soak your hands in Honey Sea Salt + Herbal Plant Complex Oil to help soften the cuticle and break down dead skin cells. Nails are trim, shape, and buff along with cuticle care. Exfoliate and hydrate your skin with Honey Pearl Sugar Cane and silky smooth lotion. Finished with a rich Collagen Honey Pearl Cream Mask hot towels wrap that helps give your skin a complexion boost.",
        price: "$34",
        rating: 5,
        image: pedicure2.src,
      },
      {
        title: "Basic Manicure",
        description:
          "Our Basic manicure includes nail trimming, shaping, cuticle grooming, lotion massage, hot towels and regular polish color of your choice.",
        price: "$22",
        rating: 5,
        image: pedicure3.src,
      },
      {
        title: "Deluxe Manicure",
        description:
          "Our Deluxe manicure includes nail trimming, shaping, cuticle grooming, exfoliate and hydrate your skin with Honey Pearl Sugar Cane, lotion massage and hot towels wrap and regular polish color of your choice.",
        price: "$28",
        rating: 5,
        image: pedicure4.src,
      },
      {
        title: "Ultimate Manicure",
        description:
          "All of the same luxurious treatment as the Beautique Manicure, enhanced with Collagen Soak Gloves for the hands.",
        price: "$40",
        rating: 5,
        image: pedicure5.src,
      },
      {
        title: "Gel Polish Change | Hands",
        description: "Manicure add-ons",
        price: "$30",
        rating: 5,
        image: pedicure6.src,
      },
      {
        title: "Biab Gel Polish Change",
        description: "",
        price: "$40",
        rating: 5,
        image: buildGel6.src,
      },
    ],
    "dipping-powder-sns": [
      {
        title: "Dip Powder (Overlay)",
        description:
          "Our ONLY dip powder service doesn’t include cuticle treatment.",
        price: "$45",
        rating: 5,
        image: dipping1.src,
      },
      {
        title: "Dip Powder Manicure",
        description:
          "Our dipping service includes the cuticle treatment with Vitamin Oil. Results are dramatically different, revealing healthier nails and softer skin.",
        price: "$55",
        rating: 5,
        image: dipping2.src,
      },
      {
        title: "Dip Powder With Tip Extension",
        description:
          "Using only DIP powder to build your nails length with tip.",
        price: "$55",
        rating: 5,
        image: dipping3.src,
      },
      {
        title: "French Dip Powder",
        description: "",
        price: "$52",
        rating: 5,
        image: dipping4.src,
      },
      {
        title: "Ombre Dipping Powder",
        description: "",
        price: "$65",
        rating: 5,
        image: dipping5.src,
      },
    ],
    "acrylic-nails": [
      {
        title: "Full Set (Regular Polish)",
        description: "",
        price: "$45",
        rating: 5,
        image: acrylic1.src,
      },
      {
        title: "Fill-ins (Regular Polish)",
        description: "",
        price: "$35",
        rating: 5,
        image: acrylic2.src,
      },
      {
        title: "White Tips (Full Set)",
        description: "",
        price: "$55",
        rating: 5,
        image: acrylic3.src,
      },
      {
        title: "Gel Full Set",
        description: "",
        price: "$58",
        rating: 5,
        image: acrylic4.src,
      },
      {
        title: "Gel Fill-ins",
        description: "",
        price: "$48",
        rating: 5,
        image: acrylic5.src,
      },
      {
        title: "Ombré Pink And White Full Set",
        description: "",
        price: "$65+",
        rating: 5,
        image: acrylic6.src,
      },
      {
        title: "Ombré Full Set",
        description: "",
        price: "$75+",
        rating: 5,
        image: acrylic7.src,
      },
      {
        title: "Ombré 2 Colors Fill-ins",
        description: "",
        price: "$55+",
        rating: 5,
        image: acrylic8.src,
      },
      {
        title: "Ombré 1 Color Fill-ins",
        description: "Fill-in the only color nearest to the cuticle of nails.",
        price: "$45",
        rating: 5,
        image: acrylic9.src,
      },
      {
        title: "Color Acrylic Full Set",
        description: "",
        price: "$60",
        rating: 5,
        image: acrylic10.src,
      },
      {
        title: "Color Acrylic Fill-In",
        description: "",
        price: "$50",
        rating: 5,
        image: acrylic11.src,
      },
      {
        title: "Cut & Shape On Acrylic",
        description: "",
        price: "$12",
        rating: 5,
        image: acrylic12.src,
      },
      {
        title: "Gel Color Change On Acrylic",
        description: "",
        price: "$35",
        rating: 5,
        image: acrylic13.src,
      },
      {
        title: "New Set Acrylic On One Toe (New set/Fill-in)",
        description: "",
        price: "$10/$8",
        rating: 5,
        image: acrylic14.src,
      },
      {
        title: "New Set Acrylic On Two Toes (New set/Fill-in)",
        description: "",
        price: "$15/$13",
        rating: 5,
        image: acrylic15.src,
      },
      {
        title: "Full Set Feet",
        description: "",
        price: "$60",
        rating: 5,
        image: acrylic16.src,
      },
      {
        title: "Fill-in Feet",
        description: "",
        price: "$50",
        rating: 5,
        image: acrylic17.src,
      },
    ],
    "pink-white": [
      {
        title: "Pink & White Full Set/Overlay",
        description: "",
        price: "$68",
        rating: 5,
        image: pink1.src,
      },
      {
        title: "Pink & White Fill-ins",
        description: "",
        price: "$60",
        rating: 5,
        image: pink2.src,
      },
      {
        title: "Pink Only Full Set",
        description: "",
        price: "$55",
        rating: 5,
        image: pink3.src,
      },
      {
        title: "Pink Fill-ins",
        description: "",
        price: "$42",
        rating: 5,
        image: pink4.src,
      },
    ],
    "kid-services": [
      {
        title: "Little Pedi",
        description: "",
        price: "$28",
        rating: 5,
        image: kid1.src,
      },
      {
        title: "Little Mani",
        description: "",
        price: "$18",
        rating: 5,
        image: kid2.src,
      },
      {
        title: "Little Gel Mani",
        description: "",
        price: "$37",
        rating: 5,
        image: kid3.src,
      },
      {
        title: "Little Gel Pedi",
        description: "",
        price: "$45",
        rating: 5,
        image: kid4.src,
      },
      {
        title: "Little Gel Polish Change",
        description: "",
        price: "$25",
        rating: 5,
        image: kid5.src,
      },
      {
        title: "Little Gel Polish Change Toes",
        description: "",
        price: "$30",
        rating: 5,
        image: kid6.src,
      },
      {
        title: "Little Dip Powder",
        description: "",
        price: "$40",
        rating: 5,
        image: kid7.src,
      },
      {
        title: "Little Dip Manicure",
        description: "",
        price: "$47",
        rating: 5,
        image: kid8.src,
      },
      {
        title: "Little Acrylic Full Set/ Gel Full Set",
        description: "",
        price: "$37",
        rating: 5,
        image: kid9.src,
      },
      {
        title: "Little Acrylic Fill-ins/ Gel Fill-ins",
        description: "",
        price: "$27",
        rating: 5,
        image: kid10.src,
      },
      {
        title: "Little Regular Color Change | Hands",
        description: "",
        price: "$10",
        rating: 5,
        image: kid11.src,
      },
      {
        title: "Little Regular Color Change | Toes",
        description: "",
        price: "$12",
        rating: 5,
        image: kid12.src,
      },
    ],
    "misc-services": [
      {
        title: "Regular Color Change (Hands)",
        description: "",
        price: "$12",
        rating: 5,
        image: misc1.src,
      },
      {
        title: "Regular Color Change (Feet)",
        description: "",
        price: "$17",
        rating: 5,
        image: misc2.src,
      },
      {
        title: "Nail Trimming & Shaping (Hands)",
        description: "",
        price: "$8",
        rating: 5,
        image: misc3.src,
      },
      {
        title: "Nail Trimming & Shaping (Feet)",
        description: "",
        price: "$12",
        rating: 5,
        image: misc4.src,
      },
      {
        title: "Paraffin (Hands Only)",
        description: "",
        price: "$10",
        rating: 5,
        image: misc5.src,
      },
      {
        title: "Paraffin (Feet Only)",
        description: "",
        price: "$14",
        rating: 5,
        image: misc6.src,
      },
      {
        title: "3rd Color and More",
        description: "",
        price: "$3/each",
        rating: 5,
        image: misc7.src,
      },
      {
        title: "Full Design (Hands)",
        description: "",
        price: "$15 and up",
        rating: 5,
        image: misc8.src,
      },
      {
        title: "Full Design (Feet)",
        description: "",
        price: "$15 and up",
        rating: 5,
        image: misc9.src,
      },
      {
        title: "Square/Squoval/Rounded",
        description: "",
        price: "$0",
        rating: 5,
        image: misc10.src,
      },
      {
        title: "Oval/Almond/Coffin/Stiletto",
        description: "",
        price: "$10 (Full Set)/$5 (Fill-ins)",
        rating: 5,
        image: misc11.src,
      },
      {
        title: "Gel Build Remove Only",
        description: "",
        price: "$15",
        rating: 5,
        image: misc12.src,
      },
      {
        title: "Acrylic Remove Only",
        description: "",
        price: "$15",
        rating: 5,
        image: misc13.src,
      },
      {
        title: "Acrylic Remove w/Full-Service",
        description: "",
        price: "$5",
        rating: 5,
        image: misc14.src,
      },
      {
        title: "Dipping Powder Remove Only",
        description: "",
        price: "$12",
        rating: 5,
        image: misc15.src,
      },
      {
        title: "Dipping Powder Remove w/Full-Service",
        description: "",
        price: "$5",
        rating: 5,
        image: misc16.src,
      },
      {
        title: "Gel/Shellac Remove Only",
        description: "",
        price: "$12",
        rating: 5,
        image: misc17.src,
      },
      {
        title: "Gel/Shellac Remove w/Full-Service",
        description: "",
        price: "$5",
        rating: 5,
        image: misc18.src,
      },
      {
        title: "Gel/Shellac Remove Only (Feet)",
        description: "",
        price: "$15",
        rating: 5,
        image: misc19.src,
      },
      {
        title: "Gel/Shellac Remove w/Full-Service (Feet)",
        description: "",
        price: "$7",
        rating: 5,
        image: misc20.src,
      },
      {
        title: "Gel/Acrylic/Dipping Powder Repaired",
        description: "",
        price: "$5+",
        rating: 5,
        image: misc21.src,
      },
    ],
    waxing: [
      {
        title: "Eyebrow",
        description: "",
        price: "$15",
        rating: 5,
        image: wax1.src,
      },
      {
        title: "Lip",
        description: "",
        price: "$10",
        rating: 5,
        image: wax2.src,
      },
      {
        title: "Chin",
        description: "",
        price: "$15",
        rating: 5,
        image: wax3.src,
      },
      {
        title: "Side of Face",
        description: "",
        price: "$18",
        rating: 5,
        image: wax4.src,
      },
      {
        title: "Under, Upper or Lower Arm",
        description: "",
        price: "$25",
        rating: 5,
        image: wax5.src,
      },
      {
        title: "Full Arm",
        description: "",
        price: "$40",
        rating: 5,
        image: wax6.src,
      },
      {
        title: "Back or Chest",
        description: "",
        price: "$50+",
        rating: 5,
        image: wax7.src,
      },
      {
        title: "Stomach",
        description: "",
        price: "$20+",
        rating: 5,
        image: wax8.src,
      },
      {
        title: "Lower Leg",
        description: "",
        price: "$30+",
        rating: 5,
        image: wax9.src,
      },
      {
        title: "Upper Leg",
        description: "",
        price: "$35+",
        rating: 5,
        image: wax10.src,
      },
      {
        title: "Full Leg",
        description: "",
        price: "$60+",
        rating: 5,
        image: wax11.src,
      },
      {
        title: "Brazilian/Bikini",
        description: "",
        price: "Call",
        rating: 5,
        image: wax12.src,
      },
    ],
    "build-gel": [
      {
        title: "Hard Gel Extension",
        description:
          "Hard gel is the strongest gel enhancement providing greater strength and durability for nail extensions.",
        price: "$70",
        rating: 5,
        image: buildGel1.src,
      },
      {
        title: "Hard Gel Overlay",
        description:
          "Enhance your natural nails with Hard Gel (no extensions).",
        price: "$62",
        rating: 5,
        image: buildGel2.src,
      },
      {
        title: "Hard Gel fill",
        description: "",
        price: "$55",
        rating: 5,
        image: buildGel3.src,
      },
      {
        title: "Soft Gel Tip (Gel-x)",
        description:
          "Soft gel tip is a full-coverage soft gel extension service. Since tip extensions are pre-formed to your preferred length and shape, the application process is quick and easy. A Soft gel tips service gives you the best of both worlds in that the extensions are strong and long-lasting.",
        price: "$60",
        rating: 5,
        image: buildGel4.src,
      },
    ],
  };
  return (
    <section className="flex flex-col items-center gap-20 w-full py-20">
      <div className="flex flex-col w-full max-w-[1117px] items-start gap-20 px-4 md:px-0">
        <div className="flex flex-col items-center gap-6 max-w-[1117px] mx-auto">
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
              Services
            </h2>
            <p className="font-desktop-body-paragraph-reg text-black text-[16px] leading-[150%] max-w-[1117px]">
              Bring your pedicure to the next level with benefit from the
              products.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 w-full">
          <div className="w-full max-w-screen">
            <Tabs defaultValue="Botanical Pedicure" className="w-full">
              <TabsList className="flex flex-row justify-start w-full h-auto bg-transparent gap-2 max-w-screen overflow-x-auto">
                {serviceTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap font-desktop-body-subtitle-reg text-[length:var(--desktop-body-subtitle-reg-font-size)] tracking-[var(--desktop-body-subtitle-reg-letter-spacing)] leading-[var(--desktop-body-subtitle-reg-line-height)] ${
                      tab.id === activeTab
                        ? "!bg-red !text-neutralwhite"
                        : "bg-transparent text-neutralblack border border-solid border-red"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            {serviceCards[activeTab as keyof typeof serviceCards].map(
              (service, index) => (
                <Card
                  key={service.title + index}
                  className="bg-[#f5a3b733] rounded-2xl border-none overflow-hidden"
                >
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div
                      className="w-full h-[186px] bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${service?.image})` }}
                    />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-desktop-body-para-20-med text-red text-[length:var(--desktop-body-para-20-med-font-size)] tracking-[var(--desktop-body-para-20-med-letter-spacing)] leading-[var(--desktop-body-para-20-med-line-height)]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div> */}
          <div className="flex flex-col gap-4 w-full">
            {serviceCards[activeTab as keyof typeof serviceCards].map(
              (service, index) => (
                <div
                  key={service.title + index}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-row justify-between gap-2">
                    <h3 className="font-desktop-body-para-20-med text-red text-[length:var(--desktop-body-para-20-med-font-size)] tracking-[var(--desktop-body-para-20-med-letter-spacing)] leading-[var(--desktop-body-para-20-med-line-height)]">{service.title}</h3>
                    <div className="flex-1 border-b border-dashed mb-2 border-black"></div>
                    <p className="font-desktop-body-para-20-med text-red text-[length:var(--desktop-body-para-20-med-font-size)] tracking-[var(--desktop-body-para-20-med-letter-spacing)] leading-[var(--desktop-body-para-20-med-line-height)]">{service.price}</p>
                  </div>
                  <div className="font-desktop-body-paragraph-reg text-black/70 text-[length:var(--desktop-body-paragraph-reg-font-size)] tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] leading-[var(--desktop-body-paragraph-reg-line-height)]">{service.description}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
