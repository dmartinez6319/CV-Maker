import { emptyResume } from "../../../ResumeTemplate";

const AddButton = ({ resumeData, setResumeData , section }) => {
  const addGrouped = () => {

    const template = emptyResume[section][0]
    console.log(template, resumeData)


    setResumeData( (prevData) => ({
        ...prevData,
        [section]: [
            ...prevData[section],
            template 
        ]
    }) )
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
