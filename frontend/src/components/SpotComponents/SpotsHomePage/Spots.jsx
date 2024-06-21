import { useEffect } from "react";
import { getGeneralSpotDataThunk } from "../../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import s from "./Spots.module.css";
import SpotTileCard from "../../HelperComponents/SpotTileCard";

const Spots = () => {
  const dispatch = useDispatch();

  const spots = useSelector((state) => state.spots.general);

  useEffect(() => {
    dispatch(getGeneralSpotDataThunk());
  }, [dispatch]);

  return (
    <div className={s.spots_page}>
      <div className={s.spots_container}>
        {spots.map((spot) => (
          <SpotTileCard key={spot.id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default Spots;
