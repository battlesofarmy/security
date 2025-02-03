import CommonBanner from "@/components/CommonBanner";
import BannerImg from "@/public/career/career-bg.jpeg";
import SubTitle from "./components/SubTitle";

export default function Careers() {
  return (
    <>
      <CommonBanner img={BannerImg} title={"Our Services"} />
      <section className="py-20">
        <div className="container md:px-20">
          <h2 className="text-4xl text-primary text-center font-semibold">
            Join the E4 team of professionals
          </h2>

          <SubTitle title={"E4 security is seeking enthusiastic, professional anddetail-oriented persons to join our team."} />

          <p>We offer competitive wages, job satisfaction, and flexible scheduiling, Professionalism and customer relations are at the top of our list of values for our employees.</p>
          <p className="pt-4">To be considered for employment, please complete all sections of the online application. Your application will then be reviewed. If your availability and qualifications match the requirements of our current openings we will contact you to arrange an interview.</p>

          <SubTitle title={'Equal opportunity'}/>
            <p>E4 Security is an equal opportunity employer. Our policy is to give equal employment opportunity to all qualified persons, and to provide that all individuals be recruited, hired, assigned, advanced, compensated and retained on the basis of their qualifications, and treated equally in these and all other respects without reference to race, color, national origin, religion, sex, marital status, disability, age or sexual orientation.</p>

          <SubTitle title={"Open positions"}/>
        </div>
      </section>
    </>
  );
}
