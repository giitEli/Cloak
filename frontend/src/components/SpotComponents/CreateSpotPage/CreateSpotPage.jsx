import s from "./CreateSpotPage.module.css";
import SpotForm from "../../HelperComponents/SpotForm";

const CreateSpotPage = () => {
  return (
    <div className={s.create_spot_page}>
      <div className={s.create_spot_container}>
        <h2>Create a new Spot</h2>
        <SpotForm formType="create" />
      </div>
    </div>
  );
};

export default CreateSpotPage;
