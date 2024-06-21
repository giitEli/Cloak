const validateForm = ({
  address,
  city,
  state,
  country,
  lat,
  lng,
  description,
  name,
  price,
  previewImage,
  img1,
  img2,
  img3,
  img4,
}) => {
  const errors = {};

  if (!address) errors.address = "Address is required";

  if (!city) errors.city = "City is required";

  if (!state) errors.state = "State is required";

  if (!country) errors.country = "Country is required";

  if (!lat) errors.lat = "Latitude is required";
  else {
    lat = Number(lat);
    if (lat < -90 || lat > 90)
      errors.lat = "Latitude must be within -90 and 90";
  }

  if (!lng) errors.lng = "Longitude is required";
  else {
    lng = Number(lng);
    if (lng < -180 || lng > 180)
      errors.lng = "Longitude must be within -180 and 180";
  }

  if (!description) errors.description = "Description is required";
  else if (description.length < 30)
    errors.description = "Description must be at least 30 characters";

  if (!name) errors.name = "Name is required";
  else if (name.length >= 50)
    errors.name = "Name must be less then 50 characters";

  if (!price) errors.price = "Price is required";
  else if (Number(price) <= 0) errors.price = "Price must be a positive number";

  const badUrl = (url) => {
    return (
      !url.endsWith(".png") && !url.endsWith(".jpg") && !url.endsWith(".jpeg")
    );
  };

  if (!previewImage) errors.previewImage = "Preview Image is required";
  else if (badUrl(previewImage))
    errors.previewImage = "Image URL must end in .png, .jpg, or .jpeg";

  if (img1 && badUrl(img1))
    errors.img1 = "Image URL must end in .png, .jpg, or .jpeg";

  if (img2 && badUrl(img2))
    errors.img2 = "Image URL must end in .png, .jpg, or .jpeg";

  if (img3 && badUrl(img3))
    errors.img3 = "Image URL must end in .png, .jpg, or .jpeg";

  if (img4 && badUrl(img4))
    errors.img4 = "Image URL must end in .png, .jpg, or .jpeg";

  return errors;
};

export default validateForm;
