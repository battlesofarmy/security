import CommonBanner from "@/components/CommonBanner";
import ListItems from "@/components/ListItems";
import BannerImg from "@/public/srevice/srevice-banner.jpeg";
import Image from "next/image";

import img1 from '@/public/srevice/img-1.jpg'
import img2 from '@/public/srevice/img-2.png'

export default function Services() {
  const services = [
    "Customized Security Plan",
    "Receptionist and Concierge services",
    "Corporate events",
    "Safety Plans",
    "Parking lots",
    "Commercial office buildings",
    "Special Assignments",
    "Uniformed and Plain-clothes security",
    "Mobile and foot patrols",
    "Video/Security operations center (SOC)",
    "Access and traffic control",
    "Retirement/Senior housing facilities",
    "Warehouses",
    "Short and Long term assignments….and more",
  ];

  
  return (
    <>
      <CommonBanner img={BannerImg} title={"Our Services"} />
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl text-center mb-5">Our Services</h2>
          <ListItems items={services} />
        </div>
      </section>

      <section className="py-20 mb-32 md:mb-0 bg-[#F5F6FA]">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="col-span-3">
              <h2 className="text-3xl mb-5">WHY DOES E4 SECURITY STAND OUT</h2>
              <p>At E4 Security, we deliver high quality services with a distinct personal touch. Our clients see and feel our dedication to protect them, their assets and premises as if it were our own. Our priority is the security goals of our clients through clear and continuous communication; reliability and veracity</p>
              <p>We also understand that our employees are the core of our success. We have an Open Door policy that comprises of continuous open communication throughout our organization and with our clients as well. We personally train and work to develop a unique relationship with each of our employees. This approach allows us to appreciate the needs of each officer and place them in the environment that is most suitable for their abilities. This approach also results in staff comradery, dependability and a low turnover rate.</p>
            </div>
            <div className="relative col-span-2">
              <Image className='w-[350px] -z-10' alt='image' src={img1} />
              <div className="w-[350px] mx-auto z-50 absolute top-4/5 left-12  bg-white -mt-20  p-2">
                <Image className='w-full ' alt='image' src={img2} />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
