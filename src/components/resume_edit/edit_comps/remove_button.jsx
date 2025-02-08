const RemoveButton = ({ resumeData, setResumeData, section, index }) => {
  const removeItem = () => {
    // const updatedArray = [...resumeData[section][index].slice(index,1)]
    console.log(section,index)
    console.log(resumeData[section][index])

    setResumeData((prevData) => ({
        ...prevData,
        [section]: prevData[section].filter( (item, idx) => idx !== index )
    }))
    console.log(resumeData)

  };

  return (
    <button
      onClick={() => {
        removeItem();
      }}
    >
      X
    </button>
  );
};

export default RemoveButton;
