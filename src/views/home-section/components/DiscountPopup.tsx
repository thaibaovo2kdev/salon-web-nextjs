'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";


export default function DiscountPopupSection(): JSX.Element {
    const [isOpen, setIsOpen] = useState(true);
  const discountData = {
    logo: logo.src,
    welcomeText: "We're so happy you're here!",
    discountHeading: "Get 10% OFF",
    discountDescription: "When using services at Beautique nails & spa",
    buttonText: "BOOK NOW",
    declineText: "NO THANKS, I DON'T WANT 10% OFF",
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 border-none max-w-[736px] bg-transparent px-4 md:px-0">
        <Card className="bg-red rounded-2xl w-full overflow-hidden">
          <div className="relative w-full flex justify-center py-16 px-8">
            <div className="flex flex-col w-full max-w-[417px] items-center gap-8">
              <div className="flex flex-col w-[221px] items-center gap-4">
                <img
                  className="w-[200px] h-[97px] object-cover"
                  alt="Beautique nails & spa logo"
                  src={discountData.logo}
                />
                <p
                  className="text-center font-desktop-body-paragraph-reg font-[number:var(--desktop-body-paragraph-reg-font-weight)] 
                    text-neutralwhite text-[length:var(--desktop-body-paragraph-reg-font-size)] 
                    tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] 
                    leading-[var(--desktop-body-paragraph-reg-line-height)] 
                    [font-style:var(--desktop-body-paragraph-reg-font-style)]"
                >
                  {discountData.welcomeText}
                </p>
              </div>
              <div className="flex flex-col items-center w-full">
                <h2
                  className="font-desktop-header-h2 font-[number:var(--desktop-header-h2-font-weight)] 
                    text-[#ffdf20] text-[40px] md:text-[length:var(--desktop-header-h2-font-size)] text-center 
                    tracking-[var(--desktop-header-h2-letter-spacing)] 
                    leading-[var(--desktop-header-h2-line-height)] 
                    [font-style:var(--desktop-header-h2-font-style)]"
                >
                  {discountData.discountHeading}
                </h2>
                <p
                  className="font-desktop-body-para-20 font-[number:var(--desktop-body-para-20-font-weight)] 
                    text-neutralwhite text-[16px] text-center md:text-[length:var(--desktop-body-para-20-font-size)] 
                    tracking-[var(--desktop-body-para-20-letter-spacing)] 
                    leading-[var(--desktop-body-para-20-line-height)] 
                    [font-style:var(--desktop-body-para-20-font-style)]"
                    
                >
                  {discountData.discountDescription}
                </p>
              </div>
              <div className="flex flex-col w-[268px] items-center gap-6">
                <Button
                  className="px-12 py-3 rounded-2xl bg-pink hover:bg-pink/90 text-neutralblack 
                    font-desktop-body-paragraph-med font-[number:var(--desktop-body-paragraph-med-font-weight)] 
                    text-[length:var(--desktop-body-paragraph-med-font-size)] 
                    leading-[var(--desktop-body-paragraph-med-line-height)] 
                    tracking-[var(--desktop-body-paragraph-med-letter-spacing)] 
                    [font-style:var(--desktop-body-paragraph-med-font-style)]"
                >
                  {discountData.buttonText}
                </Button>
                <Button
                  variant="link"
                  className="text-white [font-family:'Clash_Display-Regular',Helvetica] 
                    font-normal text-base tracking-[0] leading-6 underline"
                    onClick={() => setIsOpen(false)}
                >   
                  {discountData.declineText}
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              className="absolute top-6 right-6 p-0 h-12 w-12 rounded-full text-white hover:bg-white/10"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-8 w-8" />
            </Button>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}