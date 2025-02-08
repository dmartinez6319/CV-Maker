import LabelInput from "./edit_comps/label_input";

const EducationEditSection = ({ resumeData, setResumeData }) => {
  return (
    <div className="edit-education-section">
      <h1>Education</h1>
      <div className="edit-section">
        {resumeData.educationSection.map((item, index) => {
          return (
            <div className="edit-group" key={`educationSection-${index}`}>
              <LabelInput // Skill Category
                section={"educationSection"}
                setResumeData={setResumeData}
                labelName="School"
                targetValue="school"
                grouped={true}
                objectIndex={index}
                value={item.school}
              />
              <LabelInput // Skill Category
                section={"educationSection"}
                setResumeData={setResumeData}
                labelName="Location"
                targetValue="location"
                grouped={true}
                objectIndex={index}
                value={item.location}
              />
              <LabelInput // Skill Category
                section={"educationSection"}
                setResumeData={setResumeData}
                labelName="Major"
                targetValue="major"
                grouped={true}
                objectIndex={index}
                value={item.major}
              />
              <LabelInput // Skill Category
                section={"educationSection"}
                setResumeData={setResumeData}
                labelName="Date"
                targetValue="date"
                grouped={true}
                objectIndex={index}
                value={item.date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationEditSection;
