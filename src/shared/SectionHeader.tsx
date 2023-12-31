import { FC, memo } from "react";
import Title from "./Title";
import Description from "./Description";
import { IDescription } from "../context/interface";

interface Props {
  title: string;
  description: IDescription;
  className?: string;
}

const SectionHeader: FC<Props> = ({ title, description, className }) => {
  return (
    <div className={className}>
      <Title text={title} />
      <div className="mt-5 text-center">
        <Description description={description} />
      </div>
    </div>
  );
};

export default memo(SectionHeader);
