import React, { memo } from "react";
import { useParams } from "react-router-dom";

function Projects() {
  const params = useParams();
  return <div>This is project having id {params?.id}</div>;
}

export default memo(Projects);
