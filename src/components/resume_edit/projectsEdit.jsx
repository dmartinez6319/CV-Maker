import LabelInput from "./edit_comps/label_input";

const ProjectEditSection = ({ resumeData, setResumeData }) => {
  return (
    <div className="edit-project-section">
      <h1>Projects</h1>
      <div className="edit-section">
        {resumeData.projectSection.map((item, index) => {
          return (
            <div className="edit-group" key={`projectSection-${index}`}>
              <LabelInput // Skill Category
                section={"projectSection"}
                setResumeData={setResumeData}
                labelName="Name"
                targetValue="name"
                grouped={true}
                objectIndex={index}
                value={item.name}
              />
              <LabelInput // Skill Category
                section={"projectSection"}
                setResumeData={setResumeData}
                labelName="Date"
                targetValue="date"
                grouped={true}
                objectIndex={index}
                value={item.date}
              />


              <div className="edit-skill=items">
                {item.description.map((skill, skIndex) => {
                  // Skill Array Items
                  return (
                    <LabelInput // Skill Item LIST
                      section={"projectSection"}
                      setResumeData={setResumeData}
                      labelName={`Info ${skIndex + 1}`}
                      targetValue={skIndex}
                      value={skill}
                      objectIndex={index}
                      itemIndex={skIndex}
                      list={true}
                      listItem={"description"}
                      key={`${item}-${skIndex}`}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectEditSection;
