import React, { memo } from "react";

function Page404() {
  return (
    <div>
      <div className="text-center text-2xl text-red-700 mt-20">
        No Data Found
      </div>
    </div>
  );
}

export default memo(Page404);
