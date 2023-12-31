import { FC, memo } from "react";
import { IProjectDetails } from "../context/interface";
import Description from "../shared/Description";
import Button from "../shared/Button";

interface Props {
  data: IProjectDetails;
}

const ProjectDetails: FC<Props> = ({ data }) => {
  return (
    <div className="text-center space-y-8">
      <div className="border-2 border-primary-dark rounded-lg shadow-lg">
        <img src={data?.imageUrl} alt={data?.title} className="rounded-lg" />
      </div>
      <div className="space-y-5">
        <div className="font-extrabold text-xl text-black">{data?.title}</div>
        <Description description={data?.overview} />
        <div className="flex justify-center">
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
