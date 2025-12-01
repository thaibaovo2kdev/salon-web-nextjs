'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import React, { useState } from "react";
import gcPromotion from "@/assets/images/gc_promotion.png";
import Image from "next/image";

export default function DiscountPopupSection(): JSX.Element {
    const [isOpenDiscountPopup, setIsOpenDiscountPopup] = useState(true);
    const hasSeenPopup = typeof window !== "undefined" && localStorage.getItem('hasSeenDiscountPopup') === 'true';
    
    React.useEffect(() => {
        if (!hasSeenPopup) {
            setIsOpenDiscountPopup(true);
        }
    }, [setIsOpenDiscountPopup]);

    const handleClosePopup = () => {
        setIsOpenDiscountPopup(false);
    };

    const handleGiftCardPurchase = () => {
        window.open('https://topcardsolution.com', '_blank');
    };

  return (
    <Dialog open={isOpenDiscountPopup}>
      <DialogContent className="p-0 border-none max-w-[736px] z-[9999]">
        <Card className="bg-transparent rounded-2xl w-full overflow-hidden">
          <div className="relative w-full flex flex-col items-center py-8 px-8">
            <div className="flex flex-col w-full items-center gap-6">
              <Image
                className="object-contain w-full"
                alt="Gift Card Promotion"
                src={gcPromotion}
                width={600}
                height={400}
                priority
              />
              <Button
                className="px-12 py-3 !text-white rounded-2xl bg-pink hover:bg-pink/90 text-neutralblack 
                  font-desktop-body-paragraph-med font-[number:var(--desktop-body-paragraph-med-font-weight)] 
                  text-[length:var(--desktop-body-paragraph-med-font-size)] 
                  leading-[var(--desktop-body-paragraph-med-line-height)] 
                  tracking-[var(--desktop-body-paragraph-med-letter-spacing)] 
                  [font-style:var(--desktop-body-paragraph-med-font-style)] uppercase"
                onClick={handleGiftCardPurchase}
              >
                Giftcard Purchase
              </Button>
            </div>
            <Button
              variant="ghost"
              className="absolute top-6 right-6 p-0 h-12 w-12 rounded-full text-white hover:bg-white/10"
              aria-label="Close"
              onClick={handleClosePopup}
            >
              <X className="h-8 w-8" />
            </Button>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}