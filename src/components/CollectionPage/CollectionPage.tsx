import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OneCategory = () => {
  const collections = useSelector((state) => state.catalog.collections);
  const id = useParams().id
  

  return (
    <div>
      333
    </div>
  )
}

export default OneCategory