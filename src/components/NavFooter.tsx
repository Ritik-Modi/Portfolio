import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import handleCopyEmail from "@/utils/handleCopyEmail";
import handleCopyNumber from "@/utils/handleCopyNumber";
function NavFooter() {

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-white text-sm p-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <a onClick={handleCopyEmail} className="hover:underline">
          ritikmodi755@gmail.com
        </a>
        <a onClick={handleCopyNumber}>8619856363</a>
      </div>
      <div className="flex gap-4 text-xl mt-2">
        <a href="https://leetcode.com/u/ritikmodi755/">
          <SiLeetcode />
        </a>
        <a href="https://github.com/Ritik-Modi">
          <FaGithub />
        </a>
        <a href="https://x.com/ritik44669683">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/ritikmodi67/?hl=en">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default NavFooter;
