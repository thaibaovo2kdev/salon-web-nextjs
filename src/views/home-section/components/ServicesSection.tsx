import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import React from "react";
import ice1 from "@/assets/images/ice1.png";
import Image from "next/image";
import service1 from "@/assets/images/service-bg.png";
import homebg2 from "@/assets/images/home-bg-2.png";
import homebg3 from "@/assets/images/home-bg-3.png";
import video from "@/assets/videos/home-video-1.mp4";
import home4 from "@/assets/images/home-4.png";
import homee from "@/assets/images/home-e.png";
import homeTru from "@/assets/images/home-tru.png";
import homeDual from "@/assets/images/home-dual.png";
import service2 from "@/assets/images/service-2.png";
import service3 from "@/assets/images/service-3.png";
export default function ServicesSection(): JSX.Element {
  // Service categories data
  const serviceCategories = [
    {
      title: "Innovation",
      backgroundClass: "bg-[url(/rectangle-5.svg)]",
      image: service1.src,
      link: "/innovation",
    },
    {
      title: "Services",
      backgroundClass: "bg-[url(/image.svg)]",
      image: service2.src,
      link: "/services",
    },
    {
      title: "Gallery",
      backgroundClass: "bg-[url(/rectangle-5-2.svg)]",
      image: service3.src,
      link: "/gallery",
    },
  ];

  // Statistics data
  const statistics = [
    {
      value: "10+",
      label: "Years of Experience",
    },
    {
      value: "1,000+",
      label: "Choices of color",
    },
    {
      value: "100+",
      label: "Rating and Reviews",
    },
    {
      value: "20+",
      label: "Team Members",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "This place is the BEST!! I always look forward to booking my appointment to know what new design they have picked out, and if you ever want them to take risks & try something innovative, just speak up. They never fail to surprise me, even with their most simple designs.",
    },
    {
      text: "I didn't get my hair done this weekend, so I decided to pamper myself with a new manicure and pedicure at Beautique Nails & Spa. I'm very happy with their efforts and will be coming back in the future, especially for their relaxing and clean atmosphere.",
    },
    {
      text: "Loved my experience with Beautique Nails & Spa. The staff was all so very kind, accommodating, and skilled. I felt like they wanted to exceed my expectations. The technician was truly a delight -- from the moment she sat down, I knew she had skills!",
    },
  ];

  // Spa innovations data
  const spaInnovations = [
    {
      title: "DUAL-JET™",
      description: "HYDRO-MASSAGE SYSTEM",
      imageSrc: homeDual.src,
      imageAlt: "Hydro-massage system",
    },
    {
      title: "TRU-TOUCH™",
      description: "SHIATSU MASSAGE MECHANISM",
      imageSrc: homeTru.src,
      imageAlt: "Shiatsu massage mechanism",
    },
    {
      title: "4-WAY POWER CUSHION",
      description: "WITH DUAL-CONTROL",
      imageSrc: home4.src,
      imageAlt: "Power cushion",
    },
    {
      title: "ECO-AIR™",
      description: "VENTILATION-READY",
      imageSrc: homee.src,
      imageAlt: "Ventilation system",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-20">
      {/* Header Section */}
      <div className="flex flex-col w-full max-w-[1116px] items-center gap-6 mt-[40px] md:mt-[80px]">
        <Image className="object-contain" alt="Ice crystals" src={ice1} width={73} height={73} loading="lazy" />

        <div className="flex flex-col items-center gap-2 w-full">
          <h3 className="w-full px-6 md:px-0 font-desktop-header-h3 font-[number:var(--desktop-header-h3-font-weight)] text-red text-[length:var(--desktop-header-h3-font-size)] text-center tracking-[var(--desktop-header-h3-letter-spacing)] leading-[var(--desktop-header-h3-line-height)] [font-style:var(--desktop-header-h3-font-style)]">
            When it comes to nails, you deserve to feel your best
          </h3>

          <p className="w-full px-6 md:px-0 text-black font-desktop-body-paragraph-reg font-[number:var(--desktop-body-paragraph-reg-font-weight)] text-[length:var(--desktop-body-paragraph-reg-font-size)] text-center tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] leading-[var(--desktop-body-paragraph-reg-line-height)] [font-style:var(--desktop-body-paragraph-reg-font-style)]">
            Beautique Nails &amp; Spa (Nail salon State Route 28, Ste B &amp; C,
            Milford, OH 45150) - Beautique Nails &amp; Spa is sure to satisfy
            your nail needs. Our diverse clientele appreciates our careful
            attention to detail and friendly staffs. Our highly skilled
            technicians will make sure that your nails are gorgeous, and you
            leave feeling satisfied with your service. We are here to serve you
            so you can have the most relaxing and positive salon experience
            possible!
          </p>
        </div>
      </div>

      {/* Service Categories */}
      {/* <div className="flex flex-col gap-4 w-full max-w-[1116px]">
        {serviceCategories.map((category, index) => (
          <div
            key={index}
            className={`w-full h-[160px] md:h-[400px] ${category.backgroundClass} bg-[100%_100%] cursor-pointer hover:opacity-80 transition-opacity duration-300`} 
            onClick={() => window.location.href = category.link}
          >
            <div className="flex relative w-full max-w-[1116px] items-center justify-between px-0 mx-auto">
              <div className="flex items-center absolute top-[40px] w-full justify-center md:justify-start md:left-[100px]">
                <h2 className="font-desktop-header-h2 font-[number:var(--desktop-header-h2-font-weight)] text-neutralwhite text-[40px] text-[length:var(--desktop-header-h2-font-size)] tracking-[var(--desktop-header-h2-letter-spacing)] leading-[var(--desktop-header-h2-line-height)] whitespace-nowrap [font-style:var(--desktop-header-h2-font-style)]">
                  {category.title}
                </h2>
              </div>
              <img
                className="flex-none w-full bg-contain bg-no-repeat"
                alt={`${category.title} icon`}
                src={category.image}
              />
            </div>
          </div>
        ))}
      </div> */}

      {/* Who We Are Section */}
      <div className="flex flex-col w-full gap-6">
        <h2 className="w-full px-6 md:px-0 font-desktop-header-h2 font-[number:var(--desktop-header-h2-font-weight)] text-red text-[40px] text-[length:var(--desktop-header-h2-font-size)] text-center tracking-[var(--desktop-header-h2-letter-spacing)] leading-[var(--desktop-header-h2-line-height)] [font-style:var(--desktop-header-h2-font-style)]">
          Who We Are
        </h2>
        <p className="w-full px-6 md:px-8 font-desktop-body-paragraph-reg font-[number:var(--desktop-body-paragraph-reg-font-weight)] text-black text-[length:var(--desktop-body-paragraph-reg-font-size)] text-center tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] leading-[var(--desktop-body-paragraph-reg-line-height)] [font-style:var(--desktop-body-paragraph-reg-font-style)]">
          In 2003, we became one of the first nail salons to open in Milford,
          Ohio (Nails salon in Milford). We understand that each client who
          comes to us is unique, and we strive for perfection with each one. In
          2022, our salon expanded, allowing us to provide our clients with the
          next level of service. Our promise is the same now as it was over 19
          years ago, now with bigger and better facilities for all your nail
          care needs.
        </p>
      </div>
      <div className="flex flex-col w-full max-w-[1118px] gap-6 mb-20">
        {/* <h2 className="w-full font-desktop-header-h2 font-[number:var(--desktop-header-h2-font-weight)] text-red text-[40px] text-[length:var(--desktop-header-h2-font-size)] text-center tracking-[var(--desktop-header-h2-letter-spacing)] leading-[var(--desktop-header-h2-line-height)] [font-style:var(--desktop-header-h2-font-style)]">
          Salon Tour
        </h2> */}
        <div className="w-full mx-0 md:mx-0 max-w-screen md:h-[628px] bg-neutral-2 flex items-center justify-center rounded-2xl">
          <video src={video} muted controls className="w-full max-w-screen h-full object-cover" />
        </div>
      </div>
            {/* Statistics Section */}
            <div className="w-full h-[300px] bg-[url(/rectangle-23.png)] bg-cover " style={{ backgroundImage: `url(${homebg2.src})` }}>
        <div className="grid grid-cols-2 md:flex justify-center items-center gap-8 md:gap-[120px] py-0 md:py-[90px]">
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-center font-desktop-header-h2 font-[number:var(--desktop-header-h2-font-weight)] text-black text-[40px] md:text-[length:var(--desktop-header-h2-font-size)] tracking-[var(--desktop-header-h2-letter-spacing)] leading-[var(--desktop-header-h2-line-height)] [font-style:var(--desktop-header-h2-font-style)]">
                {stat.value}
              </h2>
              <p className="font-desktop-body-para-20 text-center md:text-left min-h-[60px] font-[number:var(--desktop-body-para-20-font-weight)] text-[20px] md:text-black text-[length:var(--desktop-body-para-20-font-size)] tracking-[var(--desktop-body-para-20-letter-spacing)] leading-[var(--desktop-body-para-20-line-height)] [font-style:var(--desktop-body-para-20-font-style)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>


      {/* Facts Section */}
      <div className="w-full h-[500px] md:h-[400px] bg-[url(/image-15.png)]" style={{ backgroundImage: `url(${homebg3.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col max-w-[546px] gap-2 py-6 md:py-[51px] mx-auto">
          <h2 className="w-full text-center md:text-left font-desktop-header-h2 font-[number:var(--desktop-header-h2-font-weight)] text-red text-[40px] text-[length:var(--desktop-header-h2-font-size)] tracking-[var(--desktop-header-h2-letter-spacing)] leading-[var(--desktop-header-h2-line-height)] [font-style:var(--desktop-header-h2-font-style)]">
            Facts
          </h2>
          <div className="flex flex-col gap-2 w-full px-6 md:px-0">
            <p className="w-full font-desktop-body-paragraph-reg font-[number:var(--desktop-body-paragraph-reg-font-weight)] text-black text-[length:var(--desktop-body-paragraph-reg-font-size)] tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] leading-[var(--desktop-body-paragraph-reg-line-height)] [font-style:var(--desktop-body-paragraph-reg-font-style)]">
              8,000-10,000 steps are taken in a single day. The average citizen
              walks about 100,000 miles in their lifetime
              <br />
              Human have nearly 8000 nerves in our feet and a large number of
              nerve endings near skin.
              <br />
              Women have four times as many foot problems as men. The painful
              fact is often attributed to wearing heels.
            </p>
            <p className="w-full font-desktop-body-paragraph-med font-[number:var(--desktop-body-paragraph-med-font-weight)] text-black text-[length:var(--desktop-body-paragraph-med-font-size)] tracking-[var(--desktop-body-paragraph-med-letter-spacing)] leading-[var(--desktop-body-paragraph-med-line-height)] [font-style:var(--desktop-body-paragraph-med-font-style)]">
              The foot is one of the most overworked, undervalued parts of the
              body. Be good friends to your feet, they carry you
            </p>
          </div>
        </div>
      </div>

      {/* Spa Innovations Section */}
      <div className="flex flex-col w-full max-w-[1116px] items-center gap-6">
        <h2 className="w-full px-6 md:px-0 font-desktop-header-h2 font-[number:var(--desktop-header-h2-font-weight)] text-red text-[40px] md:text-[length:var(--desktop-header-h2-font-size)] text-center tracking-[var(--desktop-header-h2-letter-spacing)] leading-[var(--desktop-header-h2-line-height)] [font-style:var(--desktop-header-h2-font-style)]">
          New Innovation of Spa - Pedi Chair
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {spaInnovations.map((innovation, index) => (
            <div
              key={index}
              className="flex flex-col w-[248px] items-center gap-4"
            >
              <img
                className="w-[120px] h-[120px] object-cover"
                alt={innovation.imageAlt}
                src={innovation.imageSrc}
              />
              <div className="flex flex-col items-center gap-1 w-full min-h-[90px]">
                <h3 className="w-full font-desktop-body-para-20-med font-[number:var(--desktop-body-para-20-med-font-weight)] text-black text-[length:var(--desktop-body-para-20-med-font-size)] text-center tracking-[var(--desktop-body-para-20-med-letter-spacing)] leading-[var(--desktop-body-para-20-med-line-height)] [font-style:var(--desktop-body-para-20-med-font-style)]">
                  {innovation.title}
                </h3>
                <p className="w-full font-desktop-body-paragraph-reg font-[number:var(--desktop-body-paragraph-reg-font-weight)] text-black text-[length:var(--desktop-body-paragraph-reg-font-size)] text-center tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] leading-[var(--desktop-body-paragraph-reg-line-height)] [font-style:var(--desktop-body-paragraph-reg-font-style)]">
                  {innovation.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="flex flex-col w-full max-w-[1116px] items-center gap-6 mb-8">
        <h2 className="w-full font-desktop-header-h2 font-[number:var(--desktop-header-h2-font-weight)] text-red text-[40px] text-[length:var(--desktop-header-h2-font-size)] text-center tracking-[var(--desktop-header-h2-letter-spacing)] leading-[var(--desktop-header-h2-line-height)] [font-style:var(--desktop-header-h2-font-style)]">
          Testimonial
        </h2>
        <div className=" flex flex-col md:flex-row items-center gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-light-pink rounded-2xl">
              <CardContent className="p-6">
                <p className="w-[308px] min-h-[180px] font-desktop-body-paragraph-reg font-[number:var(--desktop-body-paragraph-reg-font-weight)] text-black text-[length:var(--desktop-body-paragraph-reg-font-size)] text-center tracking-[var(--desktop-body-paragraph-reg-letter-spacing)] leading-[var(--desktop-body-paragraph-reg-line-height)] [font-style:var(--desktop-body-paragraph-reg-font-style)]">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Salon Tour Section */}
    </section>
  );
}
