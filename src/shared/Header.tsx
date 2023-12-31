import { FC, memo, useContext } from "react";
import { PiHamburgerBold } from "react-icons/pi";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";

interface Props {}

const Header: FC<Props> = () => {
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;
  console.log("logging from header", currentProfile);
  return (
    <div className="min-h-[62px] bg-white flex shadow-md px-4 py-3 sticky -top-0 z-50">
      <div className="flex flex-1 items-center space-x-2">
        <div className="">
          <img
            className="rounded-full h-11 w-11 my-auto border border-primary-dark"
            src={currentProfile?.details[0]?.dpUrl}
            alt="dp"
          />
        </div>
        <div className="text-base font-extrabold uppercase tracking-widest text-secondary-dark">
          {currentProfile?.details[0]?.name}
        </div>
      </div>
      <div className="flex-grow-0 flex items-center cursor-pointer bg-secondary-dark px-2.5 rounded-full">
        <PiHamburgerBold size={"25"} className="text-white" />
      </div>
    </div>
  );
};

export default memo(Header);
