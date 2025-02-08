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
      onClick={() => {
        addGrouped();
      }}
    >
      +
    </button>
  );
};

export default AddButton;
