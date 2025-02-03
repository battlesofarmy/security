import { FaPhone } from "react-icons/fa";
import SocialIcons from "./socialIcons";

export default function HeaderTop() {
  return (
    <section className="py-2 bg-primary">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-between items-center">
        {/* left mobile section  */}
        <div className="flex gap-2">
          <div className="text-sm text-white">
            <FaPhone />
          </div>
          <p className="text-[13px] text-white">833-E4-WATCH</p>
        </div>
        {/* right social section  */}
        <div>
            <SocialIcons/>
        </div>
      </div>
    </section>
  );
}
