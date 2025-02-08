import LabelInput from "./edit_comps/label_input";

const SkillEditSection = ({ resumeData, setResumeData }) => {
  return (
    <div className="edit-skill-section">
      <h1>Technial Skills</h1>
      <div className="edit-section">
        {resumeData.skillSection.map((item, index) => {
          return (
            <div className="edit-group" key={`skillSection-${index}`}>
              <LabelInput // Skill Category
                section={"skillSection"}
                setResumeData={setResumeData}
                labelName="Name"
                targetValue="name"
                grouped={true}
                objectIndex={index}
                value={item.name}
              />
              <div className="edit-skill=items">
                {item.skillCategory.map((skill, skIndex) => {
                  // Skill Array Items
                  return (
                    <LabelInput // Skill Item LIST
                      section={"skillSection"}
                      setResumeData={setResumeData}
                      labelName={`Item ${skIndex}`}
                      targetValue={skIndex}
                      value={skill}
                      objectIndex={index}
                      itemIndex={skIndex}
                      list={true}
                      listItem={"skillCategory"}
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

export default SkillEditSection;
