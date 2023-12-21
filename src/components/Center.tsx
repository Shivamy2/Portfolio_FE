import { FC, memo } from "react";
import Typewriter from "./Typewriter";
import Button from "../shared/Button";

interface Props {}

const Center: FC<Props> = () => {
  return (
    <div className="bg-hero pt-[7rem] pb-[5rem] text-center">
      <div className="absolute bg-gradient-to-r from-gray-100 to-gray-50"></div>
      <Typewriter
        text="hey i'm shivam yadav"
        className="uppercase text-4xl font-extrabold px-1 tracking-widest text-secondary-dark leading-normal"
      />
      <section className="mt-6 leading-7 px-4 text-on-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi
        fugiat nostrum, nemo qui a quia odio dolore neque tenetur ratione
        magnam.
      </section>
      <Button label="Projects" className="!mx-auto mt-11 px-14" />
    </div>
  );
};

export default memo(Center);
