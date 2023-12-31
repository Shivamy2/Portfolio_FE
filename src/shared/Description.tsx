import { FC, memo } from "react";
import { IDescription } from "../context/interface";
import { prepareDecoratedText } from "../utils/helper";
import parse from "html-react-parser";

interface Props {
  description: IDescription;
  className?: string;
}

const Description: FC<Props> = ({ description, className }: Props) => {
  const decoratedText = prepareDecoratedText(description);
  console.log("final decorated text", decoratedText, description);
  return (
    <div className={`space-y-2 ${className}`}>
      {decoratedText
        ?.toString()
        ?.split("\n")
        ?.map((text, index) => <p key={index}>{parse(text.trim())}</p>)}
    </div>
  );
};

export default memo(Description);
