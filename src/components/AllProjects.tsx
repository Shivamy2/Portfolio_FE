import { FC, memo, useContext } from "react";
import { ProfileContext } from "../App";
import { IMasterContext } from "../context/interface";
import SectionHeader from "../shared/SectionHeader";
import ProjectDetails from "./ProjectDetails";

interface Props {}

const AllProjects: FC<Props> = () => {
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;

  return (
    <div className="my-20 space-y-16 px-4">
      <div>
        <SectionHeader
          title={currentProfile?.details[0]?.projects?.title}
          description={currentProfile?.details[0]?.projects?.introduction}
        />
      </div>
      <div className="mt-10">
        {currentProfile?.details[0]?.projects?.personalProjectsDetails
          ?.length && (
          <div>
            <h3 className="font-bold text-2xl text-black tracking-wider">
              Personal Projects
            </h3>
            <hr className="border border-secondary-dark w-24 mt-1" />
            <div className="mt-10 space-y-20">
              {currentProfile?.details[0]?.projects?.personalProjectsDetails?.map(
                (details, index) => (
                  <ProjectDetails key={index} data={details} />
                ),
              )}
            </div>
          </div>
        )}
      </div>
      <div className="mt-10">
        {currentProfile?.details[0]?.projects?.professionalProjectsDetails
          ?.length && (
          <div>
            <h3 className="font-bold text-2xl text-black tracking-wider">
              Professional Projects
            </h3>
            <hr className="border border-secondary-dark w-24 mt-1" />
            <div className="mt-10 space-y-20">
              {currentProfile?.details[0]?.projects?.professionalProjectsDetails?.map(
                (details, index) => (
                  <ProjectDetails key={index} data={details} />
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(AllProjects);
