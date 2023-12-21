import { FC, memo, useEffect, useState } from "react";

interface Props {
  text: string;
  className?: string;
}

const Typewriter: FC<Props> = ({ text, className }) => {
  const [name, setName] = useState<string>("");
  const [nameIndex, setNameIndex] = useState<number>(0);

  useEffect(() => {
    if (nameIndex < text.length) {
      const timeout = setTimeout(() => {
        setName((prev) => prev + text[nameIndex]);
        setNameIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [nameIndex, text, name]);

  return (
    <div className={className}>
      {name}
      <span className="animate-pulse font-thin">|</span>
    </div>
  );
};

export default memo(Typewriter);
