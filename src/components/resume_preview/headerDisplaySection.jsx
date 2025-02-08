const HeaderDisplaySection = ({resumeData}) => {


    return (
        <div className="display-header-section display-section">
            <h1>{resumeData.headerSection.title}</h1>
            <div className="personal-info-section">

                {Object.values(resumeData.headerSection.info).map((item) => {
                    return (
                        <p key={item} className="personal-info-item">{item}</p>
                    )
                })}
            </div>
        </div>
    )

}

export default HeaderDisplaySection;