const SkillDisplaySection = ({ resumeData }) => {
  return (
    <div className="display-skill-section display-section">
      <h1>Technial Skills</h1>
      <hr />
      {resumeData.skillSection.map((section, index) => {
        return (
          <div
            key={section.title + "-" + index}
            className="display-skill-category"
          >
            <b>{section.name}</b>
            <div className="display-skill-container">
              {" "}
              {section.skillCategory.map((item, index) => {
                return (
                  <p key={item + "-" + index} className="display-skill-item">
                    {item}
                  </p>
                );
              })}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillDisplaySection;
