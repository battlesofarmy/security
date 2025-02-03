import CommonBanner from "@/components/CommonBanner";
import Image from "next/image";

import bannerImg from '@/public/about/about-us-banner.jpeg'
import img1 from "@/public/about/about-img-1.jpeg";
import img2 from "@/public/about/about-img-2.jpg";
import ServiceImages from "@/components/ServiceImages";
import ListItems from "@/components/ListItems";

export default function AboutUs() {
  const serviceItems = [
    "Commercial",
    "Healthcare",
    "Industrial",
    "Hospitality",
    "Ports/Maritime",
    "Residential",
    "Transportation",
    "...and more",
  ];

  return (
    <>
      <CommonBanner img={bannerImg} title={"About Us"} />

      <section className="py-20">
        <div className="container md:grid grid-cols-2 gap-8">
          <Image className="w-full" alt="image" src={img1} />
          <div>
            <h2 className="text-4xl md:mt-0 mt-4">
              E4 Security, Ready to provide your security needs
            </h2>
            <p className="py-2">
              E4 Security consists of security/services personnel who are
              honest, committed, exceedingly motivated and well-trained. We have
              established a concrete reputation around our pre-emptive approach
              to management; the careful selection of our personnel; great
              training and providing unmatched professionalism and attention to
              detail.
            </p>
            <p className="py-3">
              At E4 Security, our vision and mission is to protect our clients
              and their property through great security expertise, solutions,
              and flexible services. Our standard is to always surpass
              expectations through excellence in administration, advanced
              coordination, exceptional awareness and great customer service.
              Get security expertise, solutions, and flexible services.
            </p>
          </div>
        </div>
      </section>

      <div className="container mb-20 mt-10">
        <ServiceImages />
      </div>

      <section className="py-10">
        <div className="container">
          <h2 className="text-3xl mb-5">INDUSTRIES WE PROTECT</h2>

          <ListItems  items={serviceItems}/>

        </div>
      </section>

      <section className="py-20">
        <div className="container md:grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl mb-3">Why Does E4 Security Stand Out?</h2>
            <p className="py-2">
              At E4 Security, we deliver high-quality services with a distinct
              personal touch. Our clients see and feel our dedication to protect
              them, their assets and premises as if it were our own. Our
              priority is the security goals of our clients through clear and
              continuous communication; reliability and veracity.
            </p>
            <p className="py-3">
              We also understand that our employees are the core of our success.
              We have an Open Door policy that comprises of continuous open
              communication throughout our organization and with our clients as
              well. We personally train and work to develop a unique
              relationship with each of our employees. This approach allows us
              to appreciate the needs of each officer and place them in the
              environment that is most suitable for their abilities. This
              approach also results in staff comradery, dependability and a low
              turnover rate.
            </p>
          </div>

          <Image className="w-full" alt="image" src={img2} />
        </div>
      </section>
    </>
  );
}
