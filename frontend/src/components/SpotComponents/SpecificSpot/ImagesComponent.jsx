import s from "./Spot.module.css";

const ImagesComponent = ({ spotImages, preLoadedPreviewImage }) => {
  let previewImage = preLoadedPreviewImage;
  let rightImages;
  if (spotImages) {
    previewImage = spotImages.find(({ preview }) => preview);
    rightImages = spotImages.filter(({ preview }) => !preview).slice(0, 4);
  }

  return (
    <div className={s.images_container}>
      <div className={s.preview_image_container}>
        {previewImage && (
          <img
            className={s.preview_image}
            src={previewImage.url}
            alt={previewImage.url}
          />
        )}
      </div>
      <div className={s.right_images_container}>
        {rightImages && <RightImages rightImages={rightImages} />}
      </div>
    </div>
  );
};

const RightImages = ({ rightImages }) => {
  return rightImages.map(({ url, id }) => (
    <div key={id} className={s.right_image_container}>
      <img src={url} alt={url} className={s.right_image} />
    </div>
  ));
};

export default ImagesComponent;
