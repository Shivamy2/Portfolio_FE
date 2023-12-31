import { FC, memo } from "react";

interface Props {
  text: string;
  className?: string;
}

const Title: FC<Props> = ({ text, className }) => {
  return (
    <>
      <h1
        className={`uppercase text-4xl font-bold tracking-wider text-center text-secondary-dark ${className}`}
      >
        {text}
      </h1>
      <hr className="border-2 w-20 bg-secondary-dark border-secondary-dark mx-auto mt-3" />
    </>
  );
};

export default memo(Title);
