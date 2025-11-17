import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList 
} from "@/components/ui/navigation-menu";
import { Snowflake } from "lucide-react";
import React from "react";
import ice1 from "@/assets/images/ice1.png";
import Image from "next/image";

// Define the component that renders the Policies section
export default function PoliciesSection(): JSX.Element {
  // Navigation menu items configuration
  const navItems = [
    { label: "HOME", active: false },
    { label: "INNOVATION", active: false },
    { label: "SERVICES", active: false },
    { label: "GALLERY", active: false },
    { label: "POLICIES", active: true },
    { label: "CONTACT US", active: false },
  ];

  // Policy sections content data
  const policySections = [
    {
      title: "PUNCTUALITY",
      content: "To remain courteous of others, please arrive on time for scheduled appointments. Please contact a salon coordinator if it appears that you are going to be late to an appointment. If you are expecting to be more than 10 minutes late, we cannot guarantee completion of the services booked, but as always, we'll make every effort to do so.",
    },
    {
      title: "REPAIR",
      content: "Lacquer polish or regular polish is short-term polish that is not guaranteed.\nGel/shellac polish manicures are guaranteed for 7 days after your appointment excluding breakages. If you notice light chips or lifting in the first 7 days, please call us to schedule a free repair.\nNail enhancement (Acrylic, Dipping Powder) services are guaranteed for 7 days after your appointment. If you notice light chips or breakages in the first 7 days, please call us to schedule a free repair.\nRepairs after 7 days for breakages, tears, corner breaks are $5+. Please bring your receipt to show proof of services.",
    },
    {
      title: "REFUND",
      content: "Services are non-refundable. If for any reason you are unsatisfied with your service, we will be more than happy to fix it for you. Please do not hesitate to let our front desk or an on-site manager know of any concerns. We're here to help!",
    },
    {
      title: "PAYMENT",
      content: "We accept cash, Visa, MasterCard, American Express or Discover credit cards for payment.\nUnfortunately, we do not accept checks.",
    },
    {
      title: "GIFT CERTIFICATES",
      content: "All gift certificate sales are final. Gift certificates are not refundable or exchangeable. Gift certificates should be treated as cash and are not redeemable if lost or stolen. Beautique is not responsible for unauthorized use, lost, stolen damaged gift certificates.\nAll gift certificates expire 1 year from the date of purchase.\nGift certificates are not able to be redeemed as gratuity for services.",
    },
    {
      title: "PRICES",
      content: "Prices are subject to change without notice.",
    },
    {
      title: "CANCELLATIONS",
      content: "Cancellations must be made 24 hours in advance. We recommend that you make reservations well in advance so that your desired time can be reserved.\n*** Please reference the group party section for group party cancellations.",
    },
    {
      title: "GROUP PARTY",
      content: "(5 OR MORE GUESTS)\nTo stay on schedule, all members of your party should arrive 15 minutes prior to your appointment time. Please contact us at (513)268-7777 for more special party reservation offer details.\n*** A deposit may be required at the time of booking for group parties. The deposit is nonrefundable for no shows. Cardholder will be held responsible for this charge. There will not be a charge for cancellations given with 24 hours notice.",
    },
    {
      title: "CELL PHONES, CONVERSATIONS & CHILD SUPERVISION",
      content: "All cell phones should remain on silent and conversations limited while in service areas. We ask that all guests keep voice levels to a minimum as we have created a serene and relaxing atmosphere. Children should be supervised at all times and remain respectful to those receiving services around them. This is your time to relax and rejuvenate!",
    },
    {
      title: "PERSONAL BELONGINGS",
      content: "Please leave all jewelry and valuable items at home. Beautique is not responsible for lost, stolen or misplaced items.",
    },
    {
      title: "MEDICAL CONDITIONS",
      content: "Please inform your nail technician of any medical conditions that may impact your visit. It is also imperative that we are aware of potential contagious conditions on your hands and feet. If such a condition exists, we cannot provide service(s) to you without written consent from your physician. We cannot provide services if open or infected wounds are present. If you have such a condition or think one may exist, please notify of us promptly before the service.",
    },
    {
      title: "PETS",
      content: "No Pets allowed. Service animals specifically trained to aid with a disability are welcome.",
    },
  ];

  return (
    // Main container with centered flex layout
    <div className="flex flex-col items-center gap-20 w-full py-10 md:py-20">
      {/* Policies content section */}
      <div className="flex flex-col w-full max-w-[1117px] items-start gap-20">
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
                Policies
                </h2>
                <p className="px-14 md:px-0 font-desktop-body-paragraph-reg text-black text-[16px] leading-[150%] max-w-[1117px]">
                WE RESERVE THE RIGHT TO REFUSE SERVICE TO ANYONE.
                </p>
              </div>
            </div>

        {/* Policy sections display */}
        <div className="flex flex-col w-full gap-6 px-6 md:px-0">
          {policySections.map((section, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardContent className="flex flex-col items-start gap-2 p-0">
                <h3
                  className="w-full mt-[-1.00px] font-desktop-body-para-20-med 
                    font-[number:var(--desktop-body-para-20-med-font-weight)] 
                    text-red 
                    text-[length:var(--desktop-body-para-20-med-font-size)] 
                    tracking-[var(--desktop-body-para-20-med-letter-spacing)] 
                    leading-[var(--desktop-body-para-20-med-line-height)]"
                >
                  {section.title}
                </h3>
                <p
                  className="w-full font-desktop-body-paragraph-reg 
                    font-[number:var(--desktop-body-paragraph-reg-font-weight)] 
                    text-black 
                    text-[length:var(--desktop-body-paragraph-reg-font-size)] 
                    tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] 
                    leading-[var(--desktop-body-paragraph-reg-line-height)] 
                    whitespace-pre-line"
                >
                  {section.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}