import { useEffect } from "react";
import { getSpecificSpotDataThunk } from "../../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import s from "./Spot.module.css";
import { getSpotReviewsThunk } from "../../../store/reviews";
import CreateReviewModal from "../../Modal/CreateReviewModal";
import Reviews from "./Reviews";
import ImagesComponent from "./ImagesComponent";

//turn 1 into 1.0
const decimal = (number) => {
  const string = String(number);
  if (!string.includes(".")) {
    return string + ".0";
  }
  return string;
};

const Spot = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();

  //on first render
  useEffect(() => {
    dispatch(getSpecificSpotDataThunk(spotId));
    dispatch(getSpotReviewsThunk(spotId));
  }, [dispatch, spotId]);

  let reviews = useSelector((state) => state.reviews.spotReviews[spotId]);
  if (!reviews) reviews = [];

  reviews = reviews.sort((reviewA, reviewB) => {
    const dateA = new Date(reviewA.createdAt);
    const dateB = new Date(reviewB.createdAt);
    return dateB - dateA;
  });

  const spot = useSelector((state) => state.spots.specific[spotId]);
  const user = useSelector((state) => state.session.user);
  if (!spot) return null;

  const {
    name,
    city,
    state,
    country,
    SpotImages,
    Owner,
    description,
    price,
    avgStarRating,
    numReviews,
  } = spot;

  let showCreateReview = true;
  if (
    !user ||
    reviews.find(({ userId }) => userId === user.id) ||
    user.id === spot.Owner.id
  ) {
    showCreateReview = false;
  }

  return (
    <div className={s.spot_page}>
      <div className={s.spot_container}>
        <div className="spot-info">
          <div className="top-bar">
            <h1>{name}</h1>
            <h3>
              {city}, {state}, {country}
            </h3>
          </div>
          <ImagesComponent
            spotImages={SpotImages}
          />

          <div className={s.bottom_bar}>
            <div className={s.left_side}>
              <h1>
                {Owner && `Hosted by ${Owner.firstName} ${Owner.lastName}`}
              </h1>
              <p>{description}</p>
            </div>
            <div className={s.reserve_container}>
              <div className={s.reserve_container_top}>
                <span className={s.price_info}>
                  <span className={s.price_text}>${price} </span>
                  <span className={s.night_text}>night</span>
                </span>
                {avgStarRating && (
                  <div className={s.review_info}>
                    <FaStar />
                    {decimal(avgStarRating)} <LuDot /> {numReviews}{" "}
                    {numReviews === 1 ? "Review" : "Reviews"}
                  </div>
                )}
                {!avgStarRating && (
                  <div className={s.review_info}>
                    <FaStar /> New
                  </div>
                )}
              </div>
              <div className={s.reserve_container_bottom}>
                <button
                  className={s.reserve_button}
                  onClick={() => alert("Feature coming soon.")}
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={s.reviews_section}>
          {avgStarRating && (
            <h2 className={s.review_info}>
              <FaStar />
              {decimal(avgStarRating)} <LuDot /> {numReviews}{" "}
              {numReviews === 1 ? "Review" : "Reviews"}
            </h2>
          )}
          {!avgStarRating && (
            <h2 className={s.review_info}>
              <FaStar /> New <LuDot /> {numReviews}{" "}
              {numReviews === 1 ? "Review" : "Reviews"}
            </h2>
          )}

          {!reviews.length && user && user.id !== spot.ownerId && (
            <div>Be the first to post a review</div>
          )}
          {showCreateReview && <CreateReviewModal spotId={spotId} />}

          <Reviews reviews={reviews} user={user} spotId={spotId} />
        </div>
      </div>
    </div>
  );
};

export default Spot;
