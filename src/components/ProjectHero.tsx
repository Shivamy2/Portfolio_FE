import { FC, memo } from "react";
import Typewriter from "./Typewriter";
import Button from "../shared/Button";
import { IProjectDetails } from "../context/interface";
import Description from "../shared/Description";

interface Props {
  data: IProjectDetails;
}

const Hero: FC<Props> = ({ data }) => {
  return (
    <div
      id="home"
      className="bg-hero pt-[7rem] pb-[5rem] text-center bg-center bg-cover text-on-primary"
    >
      <Typewriter
        text={data?.title}
        className="uppercase text-4xl md:text-6xl px-1 md:px-20 tracking-widest text-secondary-dark leading-normal font-hero-title"
      />
      <section className="mt-6 leading-7 px-4 text-on-secondary md:px-40">
        <Description
          description={data?.shortDescription}
          className="md:text-xl"
        />
      </section>
      <span className="flex justify-center">
        <a href="#visitlink">
          <Button label="link" className="mt-7 px-14 !max-w-min" />
        </a>
      </span>
    </div>
  );
};

export default memo(Hero);
