import { exampleResume } from "../../../ResumeTemplate";

const ExampleButton = ({ setResumeData }) => {
  const populateResume = () => {
    setResumeData(exampleResume);
  };

  return (
    <button className="edit-button" onClick={populateResume}>
      Example
    </button>
  );
};

export default ExampleButton;
