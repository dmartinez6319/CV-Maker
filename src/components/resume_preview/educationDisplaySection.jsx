const EducationDisplaySection = ({ resumeData }) => {
  return (
    <div className="display-education-section">
      <h1>Education</h1>
      <hr></hr>
      {resumeData.educationSection.map((section, index) => {
        return (
          <div
            key={section.school + "-" + index}
            className="display-education-item"
          >
            <div className="display-education-top">
              <h4>{section.school}</h4>
              <p><em>{section.location}</em></p>
            </div>

            <div className="display-education-bottom">
              <p><em>{section.major}</em></p>
              <p>{section.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationDisplaySection;
