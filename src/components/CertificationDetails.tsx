import { FC, memo } from "react";
import { ICertificateDetails } from "../context/interface";
import moment from "moment";
import Description from "../shared/Description";
import Tag from "../shared/Tag";

interface Props {
  data: ICertificateDetails;
}

const CertificationDetails: FC<Props> = ({ data }) => {
  return (
    <div className="pt-10 md:py-10">
      <div className="font-extrabold text-xl text-black md:text-2xl text-center">
        <span className=" bg-secondary-light px-5 py-2 rounded-lg">
          {data?.name}
        </span>
      </div>
      <div className="mt-10 md:grid md:grid-cols-2 md:gap-x-20 md:mt-10">
        <div className="space-y-3">
          <Description description={data?.overview} className="text-justify" />
          <div className="flex flex-col justify-center md:justify-start">
            <div className="text-center md:text-left">
              <span>Date of Completion:&nbsp;</span>
              <span className="font-semibold text-primary-dark">
                {moment(data?.date).format("Do MMMM, YYYY")}
              </span>
            </div>
            <span className="text-center md:text-left mt-4">
              <a
                href={data?.link}
                target="_blank"
                rel="noreferrer"
                className="capitalize bg-primary-dark px-6 py-2 text-on-primary tracking-wider rounded-lg"
              >
                check
              </a>
            </span>
          </div>
        </div>
        <dl className="py-10 md:py-0">
          <dt className="font-bold text-xl tracking-wider text-black">
            Skills Learned
          </dt>
          <dd className="mt-8 flex flex-wrap gap-3">
            {data?.skills?.map((ele, i) => <Tag key={i} label={ele} />)}
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default memo(CertificationDetails);
