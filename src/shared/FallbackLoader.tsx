import { FC, memo } from "react";

interface Props {
  text?: string;
}

const FallbackLoader: FC<Props> = ({ text }) => {
  return (
    <div className="h-screen font-bold flex justify-center items-center animate-pulse">
      <span className="border rounded-lg border-black py-2 px-5 bg-blue-400 tracking-wider uppercase">
        Loading {text}...
      </span>
    </div>
  );
};

FallbackLoader.defaultProps = {
  text: "Site",
};

export default memo(FallbackLoader);
