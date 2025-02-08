const ProjectDisplaySection = ({ resumeData }) => {
  return (
    <div className="display-project-section display-section">
      <h1>Projects</h1>
      <hr />

      {resumeData.projectSection.map((section, index) => {
        return (
          <div
            key={section.name + "-" + index}
            className="display-project-item "
          >
            <div className="experience-display-top top-item">
              <p>{section.name}</p>
              <p>{section.date}</p>
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

export default ProjectDisplaySection;
