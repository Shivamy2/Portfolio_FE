import { FC, memo } from "react";

interface Props {
  label: string;
  className?: string;
}

const Tag: FC<Props> = ({ className, label }) => {
  return (
    <div
      className={`bg-gray-200 px-6 font-semibold rounded-md py-2 max-w-min border border-secondary-dark text-gray-600 uppercase tracking-wider text-sm ${className}`}
    >
      {label}
    </div>
  );
};

Tag.defaultProps = {
  className: "",
};

export default memo(Tag);
