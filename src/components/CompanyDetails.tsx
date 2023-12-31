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
      <div className="text-2xl font-extrabold text-black tracking-wider">
        <span className="bg-secondary-light px-5 py-2 rounded-lg">
          {data?.employerName}
        </span>
      </div>
      <div className="md:grid md:grid-cols-2 md:mt-10 md:gap-20 pt-5">
        <div className="space-y-5">
          <div className="space-y-5">
            <div className="mt-5 md:mt-0 text-left">
              <div className="flex">
                <span className="flex-[0.3] md:flex-[0.15]">Location: </span>
                <span className="font-semibold flex-1 text-black">
                  {data?.employerLocation}
                </span>
              </div>
              <div className="flex">
                <span className="flex-[0.3] md:flex-[0.15]">Position:</span>
                <span className="font-semibold flex-1 text-secondary-dark">
                  {data?.position}
                </span>
              </div>
              <div className="flex">
                <span className="flex-[0.3] md:flex-[0.15]">Joining:</span>
                <span className="font-semibold flex-1 text-primary-dark">
                  &nbsp;
                  {moment(data?.joiningDate).format("Do MMMM, YYYY") +
                    " - " +
                    (data?.endingDate === "Present"
                      ? data?.endingDate
                      : moment(data?.endingDate).format("Do MMMM, YYYY"))}
                </span>
              </div>
            </div>
            <Description
              description={data?.overview}
              className="text-justify"
            />
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <div className="font-bold text-lg text-black text-left tracking-wide">
            What I Learned?
          </div>
          <ol className="mt-2 text-left space-y-3 list-disc">
            {data?.points?.map((point, index) => (
              <li key={index} className="ml-3">
                <Description description={point} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default memo(CompanyDetails);
