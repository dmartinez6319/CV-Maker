import LabelInput from "./edit_comps/label_input";

const ExperienceEditSection = ({ resumeData, setResumeData }) => {
  return (
    <div className="edit-experience-section">
      <h1>Experience</h1>
      <div className="edit-section">
        {resumeData.experienceSection.map((item, index) => {
          return (
            <div className="edit-group" key={`experienceSection-${index}`}>
              <LabelInput // Skill Category
                section={"experienceSection"}
                setResumeData={setResumeData}
                labelName="Title"
                targetValue="title"
                grouped={true}
                objectIndex={index}
                value={item.title}
              />
              <LabelInput // Skill Category
                section={"experienceSection"}
                setResumeData={setResumeData}
                labelName="Date"
                targetValue="date"
                grouped={true}
                objectIndex={index}
                value={item.date}
              />
              <LabelInput // Skill Category
                section={"experienceSection"}
                setResumeData={setResumeData}
                labelName="Company"
                targetValue="company"
                grouped={true}
                objectIndex={index}
                value={item.company}
              />
              <LabelInput // Skill Category
                section={"experienceSection"}
                setResumeData={setResumeData}
                labelName="Location"
                targetValue="location"
                grouped={true}
                objectIndex={index}
                value={item.location}
              />

              <div className="edit-skill=items">
                {item.description.map((skill, skIndex) => {
                  // Skill Array Items
                  return (
                    <LabelInput // Skill Item LIST
                      section={"experienceSection"}
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

export default ExperienceEditSection;
