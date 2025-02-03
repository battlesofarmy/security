import Image from "next/image";
import bannerImg from "../public/home/banner.jpeg";
import { MdOutlineSecurity } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";
import ServiceImages from "@/components/ServiceImages";

// Images -------------
import startupImg from "../public/home/startup.jpeg";
import cctvImg from "../public/home/cctv.jpeg";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section
        style={{
          background: `url(${bannerImg.src})no-repeat top left`,
          backgroundSize: "cover",
        }}
        className=""
      >
        <div className="py-24 bg-black bg-opacity-50 text-white text-center">
          <div className="container">
            <h2 className="text-5xl">E4 Security, Inc.</h2>
            <p className="md:w-3/5 mx-auto my-5">
              Providing high quality personalized and professional security
              services throughout the Bay Area and beyond. Both clients and
              employees are pleased with E4 Security.
            </p>

            <div className="flex gap-10 text-4xl md:text-5xl justify-center md:pt-4 text-primary-dark">
              <MdOutlineSecurity />
              <GrShieldSecurity />
              <RiSecurePaymentFill />
            </div>
            <div className="md:pt-10 mt-3">
              <p className="pb-5 text-lg">
                E4 Security, Inc. is currently licensed in the following states:
              </p>
              <div className="flex justify-center gap-10 text-sm">
                <p>California - PPO #121549</p>
                <p>California - PPO #121549</p>
              </div>
              <div className="flex justify-center gap-10 text-sm pt-3">
                <p>California - PPO #121549</p>
                <p>California - PPO #121549</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* startup section  */}
      <section className="py-16 bg-[#F3F5FA]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
            {/* Left side  */}
            <div>
              <h2 className="text-4xl">
                E4 rendered Startup business award by chamber of commerce
              </h2>
              <p className="py-5">
                E4 Security, Inc. CEO - Edward Henderson accepted the Startup
                Business award from the Oakland African American Chamber of
                Commerce (OAACC); at the 19th Annual OAACC Awards Luncheon on
                October 27, 2022. Edward was congratulated by Oakland Mayor
                Libby Schaaf and others while also receiving commendations from
                the State, County and City.
              </p>
            </div>
            {/* Right side */}
            <Image alt="bussiness" src={startupImg} />
          </div>
        </div>
      </section>

      {/* Services  */}
      <section>
        {/* Top bar  */}
        <div className="container py-20 text-center">
          <h4 className="text-primary-dark">WHAT WE OFFER</h4>
          <h2 className="text-4xl py-4">OUR SERVICES</h2>
          <p className="md:w-3/5 mx-auto">
            E4 Security provides a wide array of high quality services. We
            deliver high quality services with a distinct personal touch. Our
            clients see and feel our dedication to protect them.
          </p>
        </div>
        {/* service items  */}
        <div className="md:grid md:grid-cols-4 text-center">
          {/* srevice 1 */}
          <div className="bg-gray-900 py-10 text-white px-4">
            <h2 className="text-2xl my-3">Customized Security Plans</h2>
            <p>
              Various salable businesses mainly focus on averting theft and
              burglary. Many businesses must also guard themselves against other
              problems such as employee fraud, internal theft and the liability
              of personnel safety. At E4 Security, we develop customized
              strategic plans that will protect your organization based on your
              specific security objectives
            </p>
          </div>

          {/* srevice 2 */}
          <div className="bg-primary py-10 text-white px-4">
            <MdOutlineSecurity className="text-6xl mx-auto" />
            <h2 className="text-2xl mb-2 mt-5">Customized Security Plans</h2>
            <p>
              Various salable businesses mainly focus on averting theft and
              burglary. Many businesses must also guard themselves against other
              problems such as employee fraud, internal theft and the liability
              of personnel safety. At E4 Security, we develop customized
              strategic plans that will protect your organization based on your
              specific security objectives
            </p>
          </div>

          {/* srevice 1 */}
          <div className="bg-gray-900 py-10 text-white px-4">
            <h2 className="text-2xl my-3">Customized Security Plans</h2>
            <p>
              Various salable businesses mainly focus on averting theft and
              burglary. Many businesses must also guard themselves against other
              problems such as employee fraud, internal theft and the liability
              of personnel safety. At E4 Security, we develop customized
              strategic plans that will protect your organization based on your
              specific security objectives
            </p>
          </div>

          {/* srevice 2 */}
          <div className="bg-primary py-10 text-white px-4">
            <MdOutlineSecurity className="text-6xl mx-auto" />
            <h2 className="text-2xl mb-2 mt-5">Customized Security Plans</h2>
            <p>
              Various salable businesses mainly focus on averting theft and
              burglary. Many businesses must also guard themselves against other
              problems such as employee fraud, internal theft and the liability
              of personnel safety. At E4 Security, we develop customized
              strategic plans that will protect your organization based on your
              specific security objectives
            </p>
          </div>
        </div>
      </section>

      {/* Market Solution  */}
      <section className="py-20">
        <div className="container">
          {/* top part  */}
          <div className="text-center">
            <h2 className="text-4xl my-4">Market solutions</h2>
            <p className="md:w-3/5 mx-auto">
              These are some of the areas where E4 Security provides Market
              Solutions. We will work with you to develop and customized a plan
              to fulfill your security needs.
            </p>
          </div>
          {/* Services image and text  */}
          <div className="pt-10">
            <ServiceImages />
          </div>
        </div>
      </section>

      {/* CC tv & review section  */}
      <section>
        <div className="md:grid md:grid-cols-2 place-items-center">
          {/* left  */}
          <Image alt="bussiness" src={cctvImg}/>
          {/* right  */}
            <div className="relative mx-auto my-20 flex max-w-xl flex-col items-center justify-center px-10 py-20">
      <svg className="absolute -top-10 -left-10 text-9xl opacity-10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z" /></svg>
      <h1 className="mb-6 text-4xl font-black text-white">Amazing!</h1>
      <p className="max-w-md text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aperiam placeat esse incidunt blanditiis maxime at quisquam ipsum quia voluptates?</p>
      <div className="-z-10 absolute overflow-hidden h-full w-full flex justify-center">
        <svg className="w-[40rem] sm:w-full shrink-0" viewBox="0 0 225 140" fill="none" xmlns="http://www.w3.org/2000/svg">    <path d="M2.00003 57.0391C-3.60997 75.6991 2.82003 103.009 17.37 117.559C31.91 132.109 54.95 139.839 76.94 137.559C92.8 135.909 107.42 129.519 122.71 125.509C138 121.499 155.69 120.159 168.97 127.889C175.82 131.869 181.35 138.159 189.42 139.599C196.67 140.899 204.25 137.719 209.18 132.909C214.1 128.099 216.79 121.879 218.85 115.679C224.65 98.2691 226.3 79.8191 223.68 61.8391C221.84 49.2191 217.61 36.3491 207.83 26.8991C192.99 12.5491 169.11 9.13909 147.21 6.14909C127.53 3.45909 107.79 0.419095 87.87 0.589095C67.95 0.749095 47.5701 4.3391 30.9601 13.9091C14.3401 23.4691 2.05003 39.6891 2.00003 57.0391Z" fill="url(#paint0_linear_15_6)" />    <defs>      <linearGradient id="paint0_linear_15_6" x1="-40.5" y1="78.5" x2="225" y2="53" gradientUnits="userSpaceOnUse">        <stop stopClor="#00D4FF" />        <stop offset="1" stopColor="#0027B1" />      </linearGradient>    </defs>  </svg>
      </div>
      <div className="mt-4 flex items-center rounded-xl bg-white px-10 py-4">
        <Image width={100} height={100} className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full object-cover align-middle" src="https://componentland.com/images/R-Wx_NHvZBci3KLrgXhp1.png" alt="" />
        <div className="ml-3">
          <p className="text-lg font-semibold text-blue-700">Jessica Elba</p>
          <p className="mt-px text-xs text-blue-700">CEO, Salesforce</p>
        </div>
      </div>
            </div>
        </div>
      </section>
    </>
  );
}
