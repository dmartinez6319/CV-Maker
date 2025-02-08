import EducationDisplaySection from "../components/resume_preview/educationDisplaySection";
import ExperienceDisplaySection from "../components/resume_preview/experienceDisplaySection";
import HeaderDisplaySection from "../components/resume_preview/headerDisplaySection";
import ProjectDisplaySection from "../components/resume_preview/projectsDisplaySection";
import SkillDisplaySection from "../components/resume_preview/skillsDisplaySection";

const DisplayPage = ({ resumeData }) => {
  return (
    <div className="display-resume">
      <div className="display-resume-page">
        <HeaderDisplaySection resumeData={resumeData} />
        <EducationDisplaySection resumeData={resumeData} />
        <SkillDisplaySection resumeData={resumeData} />
        <ExperienceDisplaySection resumeData={resumeData} />
        <ProjectDisplaySection resumeData={resumeData} />
      </div>
    </div>
  );
};

export default DisplayPage;
