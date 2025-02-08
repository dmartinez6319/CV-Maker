import ExampleButton from "../components/resume_edit/edit_comps/example_button";
import ResetButton from "../components/resume_edit/edit_comps/reset_button";
import EducationEditSection from "../components/resume_edit/educationEdit";
import ExperienceEditSection from "../components/resume_edit/experienceEdit";
import HeaderEditSection from "../components/resume_edit/headerEdit";
import ProjectEditSection from "../components/resume_edit/projectsEdit";
import SkillEditSection from "../components/resume_edit/skillsEdit";

const EditorPage = ({ resumeData, setResumeData }) => {
  return (
    <div className="edit-resume">
      <div className="edit-buttons">
        <ResetButton resumeData={resumeData} setResumeData={setResumeData} />
        <ExampleButton resumeData={resumeData} setResumeData={setResumeData} />
      </div>
      <HeaderEditSection
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <EducationEditSection
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <SkillEditSection resumeData={resumeData} setResumeData={setResumeData} />
      <ExperienceEditSection
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
      <ProjectEditSection
        resumeData={resumeData}
        setResumeData={setResumeData}
      />
    </div>
  );
};

export default EditorPage;
