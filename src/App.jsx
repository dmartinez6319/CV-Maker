import EditorPage from "./pages/editFormPage";
import DisplayPage from "./pages/displayResumePage";
import { emptyResume } from "./ResumeTemplate";
import { useState } from "react";
function App() {

  const [resumeData, setResumeData] = useState(emptyResume);

  return (
    <>
      <EditorPage  resumeData = {resumeData} setResumeData = {setResumeData} />
      <DisplayPage resumeData = {resumeData} setResumeData = {setResumeData} />
    </>
  );
}

export default App;
