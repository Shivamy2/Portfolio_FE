import { FC, memo } from "react";
import Button from "../shared/Button";
import Tag from "../shared/Tag";
import { tagsOption } from "../utils/helper";

interface Props {}

const About: FC<Props> = () => {
  return (
    <main className="mt-20 px-4">
      <div className="uppercase text-3xl font-bold tracking-wider text-center text-secondary-dark">
        About Me
      </div>
      <hr className="border-2 w-20 bg-secondary-dark border-secondary-dark mx-auto mt-3" />
      <div className="mt-5 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        blanditiis vitae, dolorem doloribus.
      </div>
      <dl className="mt-12 leading-7">
        <dt className="font-bold text-xl">Get to know me!</dt>
        <dd className="mt-8">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
            iusto. Modi ducimus aliquid officia ipsum alias praesentium sunt in
            recusandae architecto ab consequuntur deleniti, repellendus eligendi
            eveniet nesciunt quo et veniam facilis. Nobis, amet, eius eum omnis
            facilis, illo est voluptatibus qui debitis vero dolorum praesentium
            soluta excepturi beatae quia?
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            voluptas et nihil praesentium sunt facere vero delectus, vitae
            soluta impedit.
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
            voluptas et nihil praesentium sunt facere vero delectus, vitae
            soluta impedit.
          </p>
          <Button label="Contact" className="px-6 mt-8 !text-base" />
        </dd>
      </dl>
      <dl className="mt-24">
        <dt className="font-bold text-xl tracking-wider">My Skills</dt>
        <dd className="mt-8 flex flex-wrap gap-3">
          {tagsOption?.map((ele, i) => <Tag key={i} label={ele} />)}
        </dd>
      </dl>
    </main>
  );
};

export default memo(About);
