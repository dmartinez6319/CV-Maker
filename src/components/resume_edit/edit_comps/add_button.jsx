import { emptyResume } from "../../../ResumeTemplate";

const AddButton = ({ setResumeData, section }) => {
  const addGrouped = () => {
    const template = emptyResume[section][0];

    setResumeData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], template],
    }));
  };

  return (
    <button
    className="edit-button add-button"
      onClick={() => {
        addGrouped();
      }}
    >
      +
    </button>
  );
};

export default AddButton;
