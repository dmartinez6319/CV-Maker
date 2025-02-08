import AddButton from "./edit_comps/add_button";
import LabelInput from "./edit_comps/label_input";
import RemoveButton from "./edit_comps/remove_button";

const ProjectEditSection = ({ resumeData, setResumeData }) => {
  return (
    <div className="edit-project-section">
      <h1>Projects</h1>
      <div className="edit-section edit-grouped">
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
              <RemoveButton
                section={"projectSection"}
                index={index}
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            </div>
          );
        })}
      </div>
      <AddButton
        section="projectSection"
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
    </div>
  );
};

export default ProjectEditSection;
