import { FC, memo, useContext, useState } from "react";
import { PiHamburgerBold } from "react-icons/pi";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";

interface Props {}

const Header: FC<Props> = () => {
  const [openModal, setOpenModal] = useState(false);
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;
  console.log("logging from header", currentProfile);
  return (
    <>
      <div className="min-h-[62px] bg-white flex shadow-lg px-4 md:px-10 py-3 md:py-5 sticky -top-0 z-50">
        {openModal && (
          <div className="flex md:hidden bg-white shadow-lg py-6 px-5 rounded-lg absolute top-[4.5rem] right-1 flex-col space-y-3">
            {currentProfile?.headerOptions?.map((option, index) => (
              <a
                href={`/#${option}`}
                key={index}
                className="uppercase text-secondary-dark relative !font-extrabold tracking-wider hover:text-primary-dark cursor-pointer ease-in-out transition-all duration-200"
              >
                {option}
              </a>
            ))}
          </div>
        )}
        <div className="flex flex-1 items-center space-x-2">
          <div>
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
        <div className="hidden md:flex space-x-10 items-center">
          {currentProfile?.headerOptions?.map((option, index) => (
            <a
              href={`/#${option}`}
              key={index}
              className="uppercase text-secondary-dark !font-extrabold tracking-wider hover:text-primary-dark cursor-pointer ease-in-out transition-all duration-200"
            >
              {option}
            </a>
          ))}
        </div>
        <div
          onClick={() => setOpenModal((prev) => !prev)}
          className="md:hidden flex-grow-0 flex items-center cursor-pointer bg-secondary-dark px-2.5 rounded-full"
        >
          <PiHamburgerBold size={"25"} className="text-white" />
        </div>
      </div>
    </>
  );
};

export default memo(Header);
