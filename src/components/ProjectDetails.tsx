import { FC, memo } from "react";
import { IProjectDetails } from "../context/interface";
import Description from "../shared/Description";
import Button from "../shared/Button";

interface Props {
  data: IProjectDetails;
}

const ProjectDetails: FC<Props> = ({ data }) => {
  return (
    <div className="text-center space-y-8 md:grid md:grid-cols-2 md:gap-20">
      <div className="md:flex-shrink md:flex md:items-center">
        <img
          src={data?.imageUrl}
          alt={data?.title}
          className="border-2 border-primary-dark rounded-lg shadow-lg object-scale-down"
        />
      </div>
      <div className="space-y-5">
        <div className="font-extrabold text-xl text-black md:text-left">
          {data?.title}
        </div>
        <Description description={data?.overview} className="md:text-left" />
        <div className="flex justify-center md:justify-start md:pt-8">
          <Button
            label="Case Study"
            className="!text-sm hover:bg-primary-dark ease-in-out duration-200 transition-all"
            type="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectDetails);
