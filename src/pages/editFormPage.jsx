import EditSection from "../components/formEditorSection";

// Put all Sections from resume into here and pass what title/items it should have

const EditorPage = () => {
  const headerItems = [
    {
      name: "Name",
      type: "text",
      value: "",
    },
    {
      name: "Email",
      type: "email",
      value: "",
    },
    {
      name: "Phone Number",
      type: "tel",
      value: "",
    },
    {
      name: "GitHub",
      type: "text",
      value: "",
    },
    {
      name: "LinkedIn",
      type: "text",
      value: "",
    },
  ];

  const skillItems = [
    {
      name: "Item",
      type: "text",
      value: "",
    },
    {
      name: "Item",
      type: "text",
      value: "",
    },
    {
      name: "Item",
      type: "text",
      value: "",
    },
    {
      name: "Item",
      type: "text",
      value: "",
    },
  ];

  const experienceItems = [
    [
      {
        name: "Position",
        type: "text",
        value: "",
      },
      {
        name: "Company",
        type: "text",
        value: "",
      },
      {
        name: "Start Month",
        type: "text",
        value: "",
      },
      {
        name: "End Month / Blank if Present",
        type: "text",
        value: "",
      },
      {
        name: "Start Year",
        type: "number",
        value: "",
      },
      {
        name: "End Year / Present",
        type: "number",
        value: "",
      },
      {
        name: "Description",
        type: "textarea",
        value: ""
      }
    ],
  ];

  const projectItems = [
    [
      {
        name: "Name",
        type: "text",
        value: "",
      },
      {
        name: "Start Month",
        type: "text",
        value: "",
      },
      {
        name: "End Month / Blank if Present",
        type: "text",
        value: "",
      },
      {
        name: "Start Year",
        type: "number",
        value: "",
      },
      {
        name: "End Year / Present",
        type: "number",
        value: "",
      },
      {
        name: "Description",
        type: "textarea",
        value: ""
      }
    ],
  ];

  return (
    <section className="resume-editor">
      <EditSection
        title="Personal Information"
        canAdd={false}
        editItems={headerItems}
        isGrouped={false}
      />
      <EditSection
        title="Skills"
        canAdd={true}
        editItems={skillItems}
        isGrouped={false}
      />
      <EditSection
        title="Experience"
        canAdd={true}
        editItems={experienceItems}
        isGrouped={true}
      />
      <EditSection
        title="Projects"
        canAdd={true}
        editItems={projectItems}
        isGrouped={true}
      />
    </section>
  );
};

export default EditorPage;
