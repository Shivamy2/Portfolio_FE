import { FC, memo } from "react";
import { IExperienceDetails } from "../context/interface";
import Description from "../shared/Description";
import moment from "moment";

interface Props {
  data: IExperienceDetails;
  className?: string;
}

const CompanyDetails: FC<Props> = ({ data, className }) => {
  return (
    <div className={`mt-10 text-center ${className}`}>
      <div className="space-y-5">
        <div className="text-2xl font-extrabold text-black tracking-wider">
          {data?.employerName}
        </div>
        <Description description={data?.overview} />
      </div>
      <div className="mt-5 text-left">
        <div className="flex">
          <span className="flex-[0.3]">Location: </span>
          <span className="font-semibold flex-1">{data?.employerLocation}</span>
        </div>
        <div className="flex">
          <span className="flex-[0.3]">Position:</span>
          <span className="font-semibold flex-1"> {data?.position} </span>
        </div>
        <div className="flex">
          <span className="flex-[0.3]">Joining:</span>
          <span className="font-semibold flex-1">
            &nbsp;
            {moment(data?.joiningDate).format("DD/MM/YYYY") +
              " - " +
              (data?.endingDate === "Present"
                ? data?.endingDate
                : moment(data?.endingDate).format("DD/MM/YYYY"))}
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default memo(CompanyDetails);
