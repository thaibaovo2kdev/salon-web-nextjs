"use client"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface FeedbackDialogProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  store: number
  setIsUnhappy: (unhappy: boolean) => void
}

export function FeedbackDialog({ isOpen, setIsOpen, store, setIsUnhappy }: FeedbackDialogProps) {
  const handleHappyClick = () => {
    setIsOpen(false)
    const link = document.createElement("a")
    if (store === 0) {
      link.href =
        "https://www.google.com/maps/place/Beautique+Nails+%26+Sa+Milford/@39.1921068,-84.2351963,17z/data=!3m1!4b1!4m6!3m5!1s0x8840ffc2ea542e2d:0x729fed0cef1ee513!8m2!3d39.1921068!4d-84.2351963!16s%2Fg%2F11t40_8nfy?authuser=2&entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"
    } else {
      link.href =
        "https://www.google.com/maps/place/Beautique+Nail+Spa+2+(Old+Milford)/@39.1773219,-84.2836977,17z/data=!3m1!4b1!4m6!3m5!1s0x8841abfc00273149:0x6415e5ee5a20cb64!8m2!3d39.1773178!4d-84.2811228!16s%2Fg%2F11wpl5hyjb?entry=tts&g_ep=EgoyMDI0MTAyOS4wIPu8ASoASAFQAw%3D%3D"
    }
    link.target = "_blank"
    link.click()
  }

  const handleUnhappyClick = () => {
    setIsOpen(false)
    setIsUnhappy(true)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">How was your experience?</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-6 justify-center py-6">
          <div
            className="group flex flex-col items-center justify-center p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 cursor-pointer transition-all duration-300"
            onClick={handleHappyClick}
          >
            <div className="relative mb-2 overflow-hidden rounded-full p-2 transition-all duration-300 group-hover:scale-110">
              <Image
                src="https://beautiquenailspa.com/wp-content/uploads/elementor/thumbs/happy-1-qd6m4a8etz7okd0n43avrss865ovrkg4vf2qj06208.png"
                alt="Happy face"
                width={80}
                height={80}
                className="object-contain"
                loading="lazy"
              />
            </div>
            <span className="font-semibold text-lg group-hover:text-primary transition-colors">Happy</span>
          </div>

          <div
            className="group flex flex-col items-center justify-center p-4 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 cursor-pointer transition-all duration-300"
            onClick={handleUnhappyClick}
          >
            <div className="relative mb-2 overflow-hidden rounded-full p-2 transition-all duration-300 group-hover:scale-110">
              <Image
                src="https://beautiquenailspa.com/wp-content/uploads/elementor/thumbs/sad-4-qd6m4b690t8yvyz9ylpicajorjk8z9jv7jq80a4nu0.png"
                alt="Unhappy face"
                width={80}
                height={80}
                className="object-contain"
                loading="lazy"
              />
            </div>
            <span className="font-semibold text-lg group-hover:text-primary transition-colors">Unhappy</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

