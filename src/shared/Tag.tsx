import { FC, memo } from "react";

interface Props {
  label: string;
  className?: string;
}

const Tag: FC<Props> = ({ className, label }) => {
  return (
    <div
      className={`bg-tag-bg cursor-pointer px-6 font-semibold rounded-md py-2 max-w-min border border-gray-400 text-gray-600 uppercase tracking-wider text-sm shadow-md ${className}`}
    >
      {label}
    </div>
  );
};

Tag.defaultProps = {
  className: "",
};

export default memo(Tag);
