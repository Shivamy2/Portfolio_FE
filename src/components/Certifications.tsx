import { FC, memo, useContext } from "react";
import SectionHeader from "../shared/SectionHeader";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";
import CertificationDetails from "./CertificationDetails";

interface Props {}

const Certifications: FC<Props> = () => {
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;

  return (
    <div
      id="certifications"
      className="mt-20 px-4 md:px-10 md:pb-10 2xl:w-[1200px] 2xl:mx-auto"
    >
      <div>
        <SectionHeader
          title={currentProfile?.details[0]?.certification?.title}
          description={
            currentProfile?.details[0]?.certification?.shortDescription
          }
        />
      </div>
      <div>
        {currentProfile?.details[0]?.certification?.details?.map(
          (data, index) => <CertificationDetails key={index} data={data} />,
        )}
      </div>
    </div>
  );
};

export default memo(Certifications);
