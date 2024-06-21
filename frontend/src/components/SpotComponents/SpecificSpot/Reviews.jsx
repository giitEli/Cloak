import s from "./Spot.module.css";
import Review from "./Review";
import DeleteReviewModalButton from "../../Modal/DeleteReviewModal/DeleteReviewModalButton";

const Reviews = ({ reviews, user, spotId }) => {
  return (
    <div className={s.reviews_container}>
      {reviews.map((review) => (
        <div key={review.id} className={s.review_container}>
          <Review reviewObj={review} />
          {user && user.id === review.userId && (
            <DeleteReviewModalButton reviewId={review.id} spotId={spotId} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Reviews;
