import EditorPage from "./pages/editFormPage";
import DisplayPage from "./pages/displayResumePage";
import { exampleResume } from "./ResumeTemplate";
import { useState } from "react";
import PrintButton from "./components/resume_edit/edit_comps/print_button";
function App() {

  const [resumeData, setResumeData] = useState(exampleResume);

  return (
    <main>
      <EditorPage  resumeData = {resumeData} setResumeData = {setResumeData} />
      <DisplayPage resumeData = {resumeData} setResumeData = {setResumeData} />
      <PrintButton />
    </main>
  );
}

export default App;
