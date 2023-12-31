import { FC, memo } from "react";

interface Props {}

const FallbackLoader: FC<Props> = () => {
  return (
    <div className="h-screen font-bold flex justify-center items-center animate-pulse">
      <span className="border rounded-lg border-black py-2 px-5 bg-blue-400 tracking-wider uppercase">
        Loading Theme...
      </span>
    </div>
  );
};

export default memo(FallbackLoader);
