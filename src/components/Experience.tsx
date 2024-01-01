import { FC, memo, useContext } from "react";
import SectionHeader from "../shared/SectionHeader";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";
import CompanyDetails from "./CompanyDetails";

interface Props {}

const Experience: FC<Props> = () => {
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;

  return (
    <div
      id="experience"
      className="py-20 px-4 md:px-10 2xl:w-[1200px] 2xl:mx-auto"
    >
      <SectionHeader
        title={currentProfile?.details[0]?.experience?.title}
        description={{
          values: currentProfile?.details[0]?.experience?.introduction,
        }}
      />
      <div className="space-y-16">
        {currentProfile?.details[0]?.experience?.companies?.map(
          (data, index) => <CompanyDetails key={index} data={data} />,
        )}
      </div>
    </div>
  );
};

export default memo(Experience);
