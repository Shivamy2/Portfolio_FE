import { memo } from "react";
import { ImSpinner9 } from "react-icons/im";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ImSpinner9 className="animate-spin h-20 w-20 text-primary-dark" />
    </div>
  );
}

export default memo(Loader);
