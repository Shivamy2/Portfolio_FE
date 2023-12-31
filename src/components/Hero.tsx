import { FC, memo, useContext } from "react";
import Typewriter from "./Typewriter";
import Button from "../shared/Button";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";
import Description from "../shared/Description";
import { FaLinkedin, FaGithub, FaDev, FaReddit } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

interface Props {}

const Hero: FC<Props> = () => {
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;
  return (
    <div
      id="home"
      className="bg-hero pt-[7rem] pb-[5rem] text-center bg-center bg-cover text-on-primary"
    >
      <Typewriter
        text={currentProfile?.details[0]?.home?.typewriterText}
        className="uppercase text-4xl md:text-6xl px-1 tracking-widest text-secondary-dark leading-normal font-hero-title"
      />
      <section className="mt-6 leading-7 px-4 text-on-secondary md:px-40">
        <Description
          description={currentProfile?.details?.[0]?.introduction}
          className="md:text-xl"
        />
      </section>
      <a href="#projects">
        <Button label="Projects" className="!mx-auto mt-7 px-14 !max-w-min" />
      </a>
      <div className="hidden md:block bg-white absolute top-48 px-4 text-black text-center rounded-r-lg shadow-lg">
        {currentProfile?.details?.[0]?.home?.socialLinks?.linkedin && (
          <a
            href={currentProfile?.details?.[0]?.home?.socialLinks?.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="mx-auto h-7 w-7 mt-6 hover:scale-150 ease-in-out duration-200 transition-all" />
          </a>
        )}
        {currentProfile?.details?.[0]?.home?.socialLinks?.github && (
          <a
            href={currentProfile?.details?.[0]?.home?.socialLinks?.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="mx-auto h-7 w-7 mt-5 hover:scale-150 ease-in-out duration-200 transition-all" />
          </a>
        )}
        {currentProfile?.details?.[0]?.home?.socialLinks?.dev && (
          <a
            href={currentProfile?.details?.[0]?.home?.socialLinks?.dev}
            target="_blank"
            rel="noreferrer"
          >
            <FaDev className="mx-auto h-7 w-7 mt-5 hover:scale-150 ease-in-out duration-200 transition-all" />
          </a>
        )}
        {currentProfile?.details?.[0]?.home?.socialLinks?.reddit && (
          <a
            href={currentProfile?.details?.[0]?.home?.socialLinks?.reddit}
            target="_blank"
            rel="noreferrer"
          >
            <FaReddit className="mx-auto h-7 w-7 mt-5 mb-6 hover:scale-150 ease-in-out duration-200 transition-all" />
          </a>
        )}
        {currentProfile?.details?.[0]?.home?.socialLinks?.instagram && (
          <a
            href={currentProfile?.details?.[0]?.home?.socialLinks?.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="mx-auto h-7 w-7 mt-5 mb-6 hover:scale-150 ease-in-out duration-200 transition-all" />
          </a>
        )}
      </div>
    </div>
  );
};

export default memo(Hero);
