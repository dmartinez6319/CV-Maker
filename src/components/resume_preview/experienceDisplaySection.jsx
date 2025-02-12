const ExperienceDisplaySection = ({ resumeData }) => {
  return (
    <div className="display-experience-section display-section">
      <h1>Experience</h1>
      <hr />
      {resumeData.experienceSection.map((section, index) => {
        return (
          <div
            key={section.title + "-" + index}
            className="experience-display-item"
          >
            <div className="experience-display-top top-item">
              <p>{section.title}</p>
              <p>{section.date}</p>
            </div>

            <div className="experience-display-bottom bottom-item">
              <p>{section.company}</p>
              <p>{section.location}</p>
            </div>
            <ul className="description-list">
              {section.description.map((item, itemIndex) => {
                return (
                  <li
                    key={item + "-" + itemIndex}
                    className="description-item"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceDisplaySection;
