import { FC, memo, useContext } from "react";
import Typewriter from "./Typewriter";
import Button from "../shared/Button";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";
import Description from "../shared/Description";

interface Props {}

const Hero: FC<Props> = () => {
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;
  return (
    <div className="bg-hero pt-[7rem] pb-[5rem] text-center bg-center bg-cover text-on-primary">
      <Typewriter
        text={currentProfile?.details[0]?.home?.typewriterText}
        className="uppercase text-4xl px-1 tracking-widest text-secondary-dark leading-normal font-hero-title"
      />
      <section className="mt-6 leading-7 px-4 text-on-secondary">
        <Description description={currentProfile?.details?.[0]?.introduction} />
      </section>
      <Button label="Projects" className="!mx-auto mt-11 px-14 !max-w-min" />
    </div>
  );
};

export default memo(Hero);
