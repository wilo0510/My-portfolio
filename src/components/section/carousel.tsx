import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";

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
    <div className="w-full max-w-screen-lg mx-auto overflow-hidden text-center px-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Technologies</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="technologies-carousel w-full"
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="bg-secondary-background p-4 md:p-6 rounded-xl flex flex-col items-center h-36 md:h-40 shadow-lg">
              <Image
                src={tech.src}
                alt={tech.name}
                width={64}
                height={64}
                className="w-16 md:w-20 h-auto"
              />
              <p className="text-white font-mono text-sm md:text-base">{tech.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
