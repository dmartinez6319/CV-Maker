import EditorPage from "./pages/editFormPage";
import DisplayPage from "./pages/displayResumePage";
import { exampleResume } from "./ResumeTemplate";
import { useState } from "react";
function App() {

  const [resumeData, setResumeData] = useState(exampleResume);

  return (
    <main>
      <EditorPage  resumeData = {resumeData} setResumeData = {setResumeData} />
      <DisplayPage resumeData = {resumeData} setResumeData = {setResumeData} />
    </main>
  );
}

export default App;
