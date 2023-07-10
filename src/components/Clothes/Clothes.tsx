import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClothes } from "../../features/clothesSlice";

const Clothes = () => {
  const clothes = useSelector((state) => state.clothes.clothes)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothes());
  }, []);
  return <div></div>;
};

export default Clothes;
