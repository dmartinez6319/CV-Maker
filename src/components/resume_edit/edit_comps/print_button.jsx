const PrintButton = () => {
    const resumeDisplay = document.querySelector("#display-resume-page")

    const printResume = () => {
        print(resumeDisplay)
    }

    return (
        <button className="print-button" onClick={printResume}>
            Print Resume
        </button>
    )
}

export default PrintButton;