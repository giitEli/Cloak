import { useEffect } from "react";
import { loadUserSpotsThunk } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./ManageSpots.module.css";

import SpotTileCard from "../HelperComponents/SpotTileCard";

const ManageSpots = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const spots = useSelector((state) => state.session.userSpots);

  useEffect(() => {
    dispatch(loadUserSpotsThunk());
  }, [dispatch]);

  if (!spots.length) {
    return (
      <button
        className={s.create_spot_button}
        onClick={() => navigate("/spots/new")}
      >
        Create a new Spot
      </button>
    );
  }

  return (
    <>
      <h1>Manage Spots</h1>
      <div className={s.spots_page}>
        <div className={s.spots_container}>
          {spots.map((spot) => (
            <SpotTileCard key={spot.id} spot={spot} showUpdateDelete={true} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageSpots;
