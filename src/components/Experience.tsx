import { FC, memo, useContext } from "react";
import SectionHeader from "../shared/SectionHeader";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";
import CompanyDetails from "./CompanyDetails";

interface Props {}

const Experience: FC<Props> = () => {
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;

  return (
    <div className="pt-20 px-4">
      <SectionHeader
        title={currentProfile?.details[0]?.experience?.title}
        description={{
          values: currentProfile?.details[0]?.experience?.introduction,
        }}
      />
      <div>
        {currentProfile?.details[0]?.experience?.companies?.map(
          (data, index) => <CompanyDetails key={index} data={data} />,
        )}
      </div>
    </div>
  );
};

export default memo(Experience);
