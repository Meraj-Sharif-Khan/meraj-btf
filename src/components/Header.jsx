import fbIcon from "../assets/icons/fbIcon.svg";
import inIcon from "../assets/icons/inIcon.svg";
import ytIcon from "../assets/icons/ytIcon.svg";
import xIcon from "../assets/icons/xIcon.svg";
import userIcon from "../assets/icons/userIcon.svg";
import { Instagram } from "lucide-react";
import ToggleButton from "./common/ToggleButton";
const Header = () => {
  return (
    <>
      <div className="w-full px-5 py-3 bg-[#333333]">
        <div className="flex flex-row justify-between">
          {/* header social */}
          <div className="w-full max-w-[193px] h-[24px] flex flex-row flex-nowrap gap-[22.15px] items-baseline">
            <a href="#">
              <Instagram className="text-white h-[24px] w-[24px] p-1" />
            </a>
            <a href="#">
              <img src={fbIcon} className="h-[24px] w-[24px] p-1" alt="" />
            </a>
            <a href="#">
              <img src={inIcon} className="h-[24px] w-[24px] p-1" alt="" />
            </a>
            <a href="#">
              <img src={ytIcon} className="h-[24px] w-[24px] p-1" alt="" />
            </a>
            <a href="#">
              <img src={xIcon} className="h-[24px] w-[24px] p-1" alt="" />
            </a>
          </div>

          <div>
            {/* header signup/login */}
            <div className="flex gap-[9px]">
              <img
                src={userIcon}
                className="h-[24px] w-[24px] p-1"
                alt="user"
              />
              <div className="font-[16px] text-white">
                <p>
                  <a href="">Login</a>/<a href="">SignUp</a>
                </p>
              </div>
              <ToggleButton/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
