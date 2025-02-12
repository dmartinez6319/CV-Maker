import AddButton from "./edit_comps/add_button";
import LabelInput from "./edit_comps/label_input";
import RemoveButton from "./edit_comps/remove_button";

const EducationEditSection = ({ resumeData, setResumeData }) => {
  return (
    <div className="edit-education-section edit-grouped">
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
              <RemoveButton
                section={"educationSection"}
                index={index}
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            </div>
          );
        })}
      </div>
      <AddButton
        section="educationSection"
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
    </div>
  );
};

export default EducationEditSection;
