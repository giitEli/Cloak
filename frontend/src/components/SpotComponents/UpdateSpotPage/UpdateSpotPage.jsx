import s from "./UpdateSpotPage.module.css";
import SpotForm from "../../HelperComponents/SpotForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserSpotsThunk } from "../../../store/session";
import { useParams } from "react-router-dom";

const UpdateSpotPage = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  const userSpots = useSelector((state) => state.session.userSpots);

  const spotData = userSpots.find(({ id }) => id === Number(spotId));

  useEffect(() => {
    dispatch(loadUserSpotsThunk());
  }, [dispatch]);

  return (
    <div className={s.update_spot_page}>
      <div className={s.update_spot_container}>
        <h2>Update your Spot</h2>
        <SpotForm formType="update" spotData={spotData} />
      </div>
    </div>
  );
};

export default UpdateSpotPage;
