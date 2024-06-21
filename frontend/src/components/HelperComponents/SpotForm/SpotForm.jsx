import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateSpotThunk } from "../../../store/spots";
import { createSpotThunk } from "../../../store/spots";
import validateForm from "./ValidateForm";
import s from "./SpotForm.module.css";

const SpotForm = ({ formType, spotData }) => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");

  const [formWasSubmitted, setFormWasSubmitted] = useState(false);

  const [errors, setErrors] = useState("");

  useEffect(() => {
    if (spotData) {
      setCountry(spotData.country || "");
      setAddress(spotData.address || "");
      setCity(spotData.city || "");
      setState(spotData.state || "");
      setLat(spotData.lat || "");
      setLng(spotData.lng || "");
      setDescription(spotData.description || "");
      setName(spotData.name || "");
      setPrice(spotData.price || "");
      setPreviewImage(spotData.previewImage || "");
      const images = spotData.SpotImages.sort((a, b) => a.id - b.id)
      console.log(images)
      if (images[1]) {
        setImg1(spotData.SpotImages[1].url || "");
      }
      if (images[2]) {
        setImg2(spotData.SpotImages[2].url || "");
      }
      if (images[3]) {
        setImg3(spotData.SpotImages[3].url || "");
      }
      if (images[4]) {
        setImg4(spotData.SpotImages[4].url || "");
      }
    }
  }, [spotData]);

  useEffect(() => {
    setErrors(
      validateForm({
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price,
        previewImage,
        img1,
        img2,
        img3,
        img4,
      })
    );
  }, [
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    description,
    price,
    previewImage,
    img1,
    img2,
    img3,
    img4,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormWasSubmitted(true);

    const images = [img1, img2, img3, img4].filter((img) => img);

    const spot = {
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImage,
      images,
    };

    if (!Object.values(errors).length) {
      let response;
      if (formType === "create") {
        response = await dispatch(createSpotThunk(spot));
      } else if (formType == "update") {
        response = await dispatch(updateSpotThunk(spotId, spot));
      }

      if (response.message === "Bad Request") {
        setErrors(response.errors);
      } else {
        navigate(`/spots/${response.spotId}`);
      }
    }
  };

  const createInput = (type, value, setFunction, placeholder) => {
    return (
      <input
        type={type}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setFunction(e.target.value);
        }}
        placeholder={placeholder}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit} className={s.spot_form}>
      <div className={s.section}>
        <h3>{"Where's your place located?"}</h3>
        <p>
          Guests will only get your exact address once they booked a
          reservation.
        </p>

        <div className={s.line}>
          <div className={s.input_container}>
            <div className={s.label}>
              Country{" "}
              <span className={s.error}>
                {formWasSubmitted && errors.country}
              </span>
            </div>
            <div className={s.input}>
              {createInput("text", country, setCountry, "Country")}
            </div>
          </div>
        </div>

        <div className={s.line}>
          <div className={s.input_container}>
            <div className={s.label}>
              Street Address{" "}
              <span className={s.error}>
                {formWasSubmitted && errors.address}
              </span>
            </div>
            <div className={s.input}>
              {createInput("text", address, setAddress, "Street Address")}
            </div>
          </div>
        </div>

        <div className={s.line}>
          <div className={s.input_container}>
            <div className={s.label}>
              City{" "}
              <span className={s.error}>{formWasSubmitted && errors.city}</span>
            </div>
            <div className={s.input}>
              {createInput("text", city, setCity, "City")}
            </div>
          </div>
          <div className={s.separator}>
            <span>,</span>
          </div>
          <div className={s.input_container}>
            <div className={s.label}>
              State{" "}
              <span className={s.error}>
                {formWasSubmitted && errors.state}
              </span>
            </div>
            <div className={s.input}>
              {createInput("text", state, setState, "State")}
            </div>
          </div>
        </div>

        <div className={s.line}>
          <div className={s.input_container}>
            <div className={s.label}>
              Latitude{" "}
              <span className={s.error}>{formWasSubmitted && errors.lat}</span>
            </div>
            <div className={s.input}>
              {createInput("number", lat, setLat, "Latitude")}
            </div>
          </div>
          <div className={s.separator}>
            <span>,</span>
          </div>
          <div className={s.input_container}>
            <div className={s.label}>
              Longitude{" "}
              <span className={s.error}>{formWasSubmitted && errors.lng}</span>
            </div>
            <div className={s.input}>
              {createInput("number", lng, setLng, "Longitude")}
            </div>
          </div>
        </div>
      </div>

      <div className={s.section}>
        <h3>Describe your place to guests</h3>

        <p>
          Mention the best features of your space, any special amenities like
          fast wifi or parking, and what you love about the neighborhood.
        </p>

        <div className={s.line}>
          <div className={s.input_container}>
            <div className={s.input}>
              <textarea
                value={description}
                onChange={(e) => {
                  e.preventDefault();
                  setDescription(e.target.value);
                }}
                placeholder="Please write at least 30 characters"
              />
              <span className={s.error}>
                {formWasSubmitted && errors.description}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={s.section}>
        <h3>Create a title for your spot</h3>
        <p>
          Catch guest{"'"}s attention with a spot that highlights what makes
          your place special
        </p>
        <div className={s.line}>
          <div className={s.input_container}>
            <div className={s.input}>
              {createInput("text", name, setName, "Name of your spot")}
            </div>
            <span className={s.error}>{formWasSubmitted && errors.name}</span>
          </div>
        </div>
      </div>

      <div className={s.section}>
        <h3>Set a base price for your spot</h3>
        <p>
          Competitive pricing can help your listing stand out and rank higher in
          search results.
        </p>

        <div className={s.line}>
          <div className={s.input_container}>
            <div className={s.input}>
              <div className={s.price_input}>
                ${" "}
                {createInput(
                  "number",
                  price,
                  setPrice,
                  "Price per night (USD)"
                )}
              </div>
              <span className={s.error}>
                {formWasSubmitted && errors.price}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={s.section}>
        <h3>Liven up your spot with photos</h3>
        <p>Submit a link to at least one photo to publish your spot.</p>
        <div className={s.line}>
          <div className={s.input_container}>
            {createInput(
              "text",
              previewImage,
              setPreviewImage,
              "Preview Image URL"
            )}
            <span className={s.error}>
              {formWasSubmitted && errors.previewImage}
            </span>
          </div>
        </div>
        <div className={s.line}>
          <div className={s.input_container}>
            {createInput("text", img1, setImg1, "Image URL")}
            <span className={s.error}>{formWasSubmitted && errors.img1}</span>
          </div>
        </div>
        <div className={s.line}>
          <div className={s.input_container}>
            {createInput("text", img2, setImg2, "Image URL")}
            <span className={s.error}>{formWasSubmitted && errors.img2}</span>
          </div>
        </div>
        <div className={s.line}>
          <div className={s.input_container}>
            {createInput("text", img3, setImg3, "Image URL")}
            <span className={s.error}>{formWasSubmitted && errors.img3}</span>
          </div>
        </div>
        <div className={s.line}>
          <div className={s.input_container}>
            {createInput("text", img4, setImg4, "Image URL")}
            <span className={s.error}>{formWasSubmitted && errors.img4}</span>
          </div>
        </div>
      </div>
      <div className={s.button_container}>
        {formType === "create" && <button type="submit">Create Spot</button>}
        {formType === "update" && <button type="submit">Update Spot</button>}
      </div>
    </form>
  );
};

export default SpotForm;
