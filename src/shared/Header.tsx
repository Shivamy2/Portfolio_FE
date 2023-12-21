import { FC, memo } from "react";
import { Resources } from "../constants";
import { PiHamburgerBold } from "react-icons/pi";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div className="min-h-[62px] bg-white flex shadow-md px-4 py-3 sticky -top-0 z-50">
      <div className="flex flex-1 items-center space-x-2">
        <div className="">
          <img
            className="rounded-full h-11 w-11 my-auto border border-primary-dark"
            src={Resources.Images.dp}
            alt="dp"
          />
        </div>
        <div className="text-base font-bold uppercase tracking-widest text-secondary-dark">
          Shivam Yadav
        </div>
      </div>
      <div className="flex-grow-0 flex items-center cursor-pointer">
        <PiHamburgerBold size={"25"} />
      </div>
    </div>
  );
};

export default memo(Header);
