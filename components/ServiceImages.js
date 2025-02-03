import Image from "next/image";
import serviceImg1 from "../public/home/services/1.jpg";
import serviceImg2 from "../public/home/services/2.jpg";
import serviceImg3 from "../public/home/services/3.jpg";
import serviceImg4 from "../public/home/services/4.jpg";
import serviceImg5 from "../public/home/services/5.jpeg";

export default function ServiceImages() {
  const services = [
    { img: serviceImg1, title: "Industrial" },
    { img: serviceImg2, title: "Construction" },
    { img: serviceImg3, title: "Energy" },
    { img: serviceImg4, title: "Transportation" },
    { img: serviceImg5, title: "Technology" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 place-items-center">
      {services.map((service, index) => (
        <div key={index} className="text-center">
          <Image
            src={service.img}
            alt={service.title}
            width={250}
            height={100}
            className="rounded-lg"
          />
          <h4 className="text-lg font-semibold mt-2">{service.title}</h4>
        </div>
      ))}
    </div>
  );
}
