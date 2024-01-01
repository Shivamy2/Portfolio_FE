import { FC, memo, useContext } from "react";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";
import Description from "../shared/Description";
import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaReddit,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import moment from "moment";

interface Props {}

const Footer: FC<Props> = () => {
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;

  return (
    <div className="bg-black text-white px-4 md:px-10 pt-8 md:pt-20 pb-10 space-y-10">
      <div className="md:grid md:grid-cols-3 space-y-10 md:space-y-0 2xl:w-[1200px] 2xl:mx-auto">
        <div className="space-y-3">
          <div className="text-xl font-extrabold uppercase tracking-widest">
            {currentProfile?.details[0]?.name}
          </div>
          <Description
            description={currentProfile?.details[0]?.introduction}
            className="text-sm leading-6 font-light text-gray-100"
          />
        </div>
        <div />
        <div className="space-y-5">
          <div className="text-xl font-extrabold uppercase tracking-widest">
            Social
          </div>
          <div className="text-center rounded-r-lg shadow-lg flex space-x-5">
            {currentProfile?.details?.[0]?.home?.socialLinks?.linkedin && (
              <a
                href={currentProfile?.details?.[0]?.home?.socialLinks?.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="mx-auto h-6 w-6 hover:scale-150 ease-in-out duration-200 transition-all" />
              </a>
            )}
            {currentProfile?.details?.[0]?.home?.socialLinks?.github && (
              <a
                href={currentProfile?.details?.[0]?.home?.socialLinks?.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="mx-auto h-6 w-6 hover:scale-150 ease-in-out duration-200 transition-all text-white" />
              </a>
            )}
            {currentProfile?.details?.[0]?.home?.socialLinks?.youtube && (
              <a
                href={currentProfile?.details?.[0]?.home?.socialLinks?.youtube}
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="mx-auto h-6 w-6 hover:scale-150 ease-in-out duration-200 transition-all text-white" />
              </a>
            )}
            {currentProfile?.details?.[0]?.home?.socialLinks?.dev && (
              <a
                href={currentProfile?.details?.[0]?.home?.socialLinks?.dev}
                target="_blank"
                rel="noreferrer"
              >
                <FaDev className="mx-auto h-6 w-6 hover:scale-150 ease-in-out duration-200 transition-all" />
              </a>
            )}
            {currentProfile?.details?.[0]?.home?.socialLinks?.reddit && (
              <a
                href={currentProfile?.details?.[0]?.home?.socialLinks?.reddit}
                target="_blank"
                rel="noreferrer"
              >
                <FaReddit className="mx-auto h-6 w-6 mb-6 hover:scale-150 ease-in-out duration-200 transition-all" />
              </a>
            )}
            {currentProfile?.details?.[0]?.home?.socialLinks?.instagram && (
              <a
                href={
                  currentProfile?.details?.[0]?.home?.socialLinks?.instagram
                }
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram className="mx-auto h-6 w-6 hover:scale-150 ease-in-out duration-200 transition-all" />
              </a>
            )}
          </div>
        </div>
      </div>
      <hr className="border border-gray-400" />
      <div className="text-center text-xs text-gray-100 tracking-wider">
        &copy; Copyright {moment().year()}. Made by{" "}
        <span className="font-bold underline">
          {currentProfile?.details[0]?.name}
        </span>
      </div>
    </div>
  );
};

export default memo(Footer);
