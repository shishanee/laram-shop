import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OneCategory = () => {
  const categories = useSelector((state) => state.catalog.categories);
  console.log(categories);
  // console.log(collections);
  const id = useParams().id
  

  return (
    <div>
      123
    </div>
  )
}

export default OneCategory