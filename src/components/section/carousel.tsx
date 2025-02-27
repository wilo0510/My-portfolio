import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

import { Pagination, Autoplay } from 'swiper/modules';

export default function TechnologiesCarousel() {
  const technologies = [
    { name: "Vue.js", src: "/images/technologies/vuejs.png" },
    { name: "React JS", src: "/images/technologies/react.png" },
    { name: "Javascript", src: "/images/technologies/Javascript.png" },
    { name: "Figma", src: "/images/technologies/figma.png" },
    { name: "Git source control", src: "/images/technologies/Git.png" },
    { name: "Html", src: "/images/technologies/html.png" },
    { name: "Css", src: "/images/technologies/css.png" },
    { name: "Figma", src: "/images/technologies/figma.png" },
    { name: "Golang", src: "/images/technologies/golang.png" },
    { name: "Datadog", src: "/images/technologies/datadog.png" },
    { name: "Kibana", src: "/images/technologies/Kibana.png" },
    { name: "New Relic", src: "/images/technologies/Newrelic.png" },
  ];


  return (
    <div className="w-full max-w-screen-lg mx-auto overflow-hidden text-center">
      <h2 className="text-xl font-bold mb-4">Technologies</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="w-full"
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="bg-secondary-background p-6 rounded-xl flex flex-col items-center h-40">
            <Image 
                src={tech.src} 
                alt={tech.name} 
                width={0} 
                height={0} 
                sizes="100vw" 
                className="w-auto h-16"
            />
              <p className="text-white font-mono">{tech.name}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination absolute bottom-0 left-0 w-full z-[-1]"></div>
      </Swiper>
    </div>
  );
}
