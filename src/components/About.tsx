import { FC, memo, useContext } from "react";
import Button from "../shared/Button";
import Tag from "../shared/Tag";
import { IMasterContext } from "../context/interface";
import { ProfileContext } from "../App";
import Description from "../shared/Description";
import SectionHeader from "../shared/SectionHeader";

interface Props {}

const About: FC<Props> = () => {
  const { currentProfile } = useContext(ProfileContext) as IMasterContext;
  return (
    <main className="mt-20 px-4">
      <SectionHeader
        title={currentProfile?.details[0]?.about?.title}
        description={currentProfile?.details?.[0]?.about?.myIntroduction}
      />
      <dl className="mt-12 leading-7">
        <dt className="font-bold text-xl text-black">Get to know me!</dt>
        <dd className="mt-8">
          <p>
            <Description
              description={
                currentProfile?.details?.[0]?.about?.knowMeDescription
              }
            />
          </p>
          <Button label="Contact" className="px-6 mt-8 !text-base !max-w-min" />
        </dd>
      </dl>
      <dl className="py-16">
        <dt className="font-bold text-xl tracking-wider text-black">
          My Skills
        </dt>
        <dd className="mt-8 flex flex-wrap gap-3">
          {currentProfile?.details[0]?.about?.skills?.map((ele, i) => (
            <Tag key={i} label={ele} />
          ))}
        </dd>
      </dl>
    </main>
  );
};

export default memo(About);
