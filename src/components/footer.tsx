import { Link } from "react-router-dom";

import { SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

const Footer = () => {
  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-8 bg-primary border-t border-t-secondary/5"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <p className="text-white text-md font-bold flex">
          &copy; Leandro {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* Social Icons */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {SOCIALS.map((social) => (
            <li
              key={social.name}
              className="text-secondary font-medium cursor-pointer text-[16px] opacity-80 hover:opacity-100 transition"
            >
              <Link to={social.link} target="_blank" rel="noreferrer noopener">
                <img src={social.icon} alt={social.name} className="h-6 w-6" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
