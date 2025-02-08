import LabelInput from "./edit_comps/label_input";

const HeaderEditSection = ({ setResumeData, resumeData }) => {
  return (
    <div className="edit-header-section edit-ungrouped">
      <h1>Personal Info</h1>
      <div className="edit-section">
        <LabelInput
          section={"headerSection"}
          setResumeData={setResumeData}
          labelName="Name"
          targetValue="title"
          select={true}
          value={resumeData.headerSection.title}
        />
        <LabelInput
          nested={true}
          section={"headerSection"}
          setResumeData={setResumeData}
          labelName="Email"
          targetValue="email"
          value={resumeData.headerSection.info.email}
        />
        <LabelInput
          nested={true}
          section={"headerSection"}
          setResumeData={setResumeData}
          labelName="Phone Number"
          targetValue="phoneNumber"
          value={resumeData.headerSection.info.phoneNumber}
        />
        <LabelInput
          nested={true}
          section={"headerSection"}
          setResumeData={setResumeData}
          labelName="GitHub"
          targetValue="gitHub"
          value={resumeData.headerSection.info.gitHub}
        />
        <LabelInput
          nested={true}
          section={"headerSection"}
          setResumeData={setResumeData}
          labelName="LinkedIn"
          targetValue="linkedIn"
          value={resumeData.headerSection.info.linkedIn}
        />
      </div>
    </div>
  );
};

export default HeaderEditSection;
