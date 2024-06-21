import s from "./SpotTileCard.module.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DeleteSpotModalButton from "../../Modal/DeleteSpotModal";

const SpotTileCard = ({ spot, showUpdateDelete }) => {
  const { id, previewImage, name, city, state, avgRating, price } = spot;

  const navigate = useNavigate();

  const makeDecimal = (number) => {
    const string = String(number);
    if (!string.includes(".")) {
      return string + ".0";
    } else {
      return string;
    }
  };

  return (
    <div
      key={id}
      className={s.spot}
      onClick={() => {
        navigate(`/spots/${id}`);
      }}
    >
      <div className={s.tooltip}>{name}</div>
      <div className={s.preview_image_container}>
        <img
          className={s.spot_preview_image}
          src={previewImage}
          alt={previewImage}
        />
      </div>
      <div className={s.spot_top_bar}>
        <span className={s.spot_location}>
          {city}, {state}
        </span>
        {avgRating && (
          <div className={s.spot_review}>
            <FaStar />
            {makeDecimal(avgRating)}
          </div>
        )}
        {!avgRating && (
          <div className={s.spot_review}>
            <FaStar /> New
          </div>
        )}
      </div>
      <div className={s.spot_bar_bottom}>
        <span className={s.price}>${price}</span> night
      </div>
      {showUpdateDelete && (
        <div className={s.modal_buttons}>
          <DeleteSpotModalButton spotId={id} />
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigate(`/spots/${id}/edit`);
              }}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotTileCard;
