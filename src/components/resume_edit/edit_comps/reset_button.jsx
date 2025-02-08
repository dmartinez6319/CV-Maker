import { emptyResume } from "../../../ResumeTemplate";

const ResetButton = ({ setResumeData }) => {
  const resetResume = () => {
    setResumeData(emptyResume);
  };

  return (
    <button className="edit-button reset-button" onClick={resetResume}>
      Reset
    </button>
  );
};

export default ResetButton;
