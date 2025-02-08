const emptyResume = {
  headerSection: {
    title: "",
    email: "",
    phoneNumber: NaN,
    gitHub: "",
    linkedIn: "",
  },
  educationSection: [
    {
      school: "",
      location: "",
      major: "",
      date: "",
    },
  ],

  skillSection: [
    {
      name: "",
      skillCategory: ["", "", ""],
    },
    {
      name: "",
      skillCategory: ["", "", ""],
    },
    {
      name: "",
      skillCategory: ["", "", ""],
    },
  ],

  experienceSection: [
    {
      title: "",
      date: "",
      company: "",
      location: "",
      description: ["", "", ""],
    },
    {
      title: "",
      date: "",
      company: "",
      location: "",
      description: ["", "", ""],
    },
  ],

  projectSection: [
    {
      name: "",
      date: "",
      description: ["", "", ""],
    },
  ],
};

const exampleResume = {
  headerSection: {
    title: "John Doe", // UNGROUPED
    info: {
      email: "jdoe1337@gmail.com", // NESTED
      phoneNumber: "954-999-1337",
      gitHub: "github.com/johndoe",
      linkedIn: "linkedin.com/johndoe",
    },
  },
  educationSection: [
    {
      school: "University of Florida",
      location: "Gainesville, FL",
      major: "BA in Computer Science",
      date: "August 2016 - June 2020",
    },
  ],

  skillSection: [
    { // GROUPED FORM
      name: "Languages",
      skillCategory: ["JavaScript", "CSS", "HTML"], // LIST
    },
    {
      name: "Frameworks/Libraries",
      skillCategory: ["ReactJS", "NodeJS", "NextJS"],
    },
    {
      name: "Dev Tools",
      skillCategory: ["VSCode", "Git", "GitHub"],
    },
    
  ],

  experienceSection: [
    {
      title: "Software Engineer II",
      date: "June 2022 - Present",
      company: "Temple Co",
      location: "Savannah, GA",
      description: [ // LIST
        "Accomplished faster 50% runtime in X",
        "Integrated application into various tasks of Y",
        "Developed responsive Y, delivering 88% customer satification",
      ],
    },
    {
      title: "Software Engineer I",
      date: "Auguest 2020 - May 2022",
      company: "Complex Solutions Inc",
      location: "Tampa, FL",
      description: [
        "Accomplished faster 50% runtime in X",
        "Integrated application into various tasks of Y",
        "Developed responsive Y, delivering 88% customer satification",
      ],
    },
  ],

  projectSection: [
    {
      name: "Fullstack Ecommerce Website",
      date: "May 2018 - July 2018",
      description: [
        "Designed the client-side part of the website using React, HTML, CSS resulting in a responsive interface",
        "Handled backend API requests and data storage using various tools",
        "Did cool stuff here with X Y and Z resulting in 100% faster runtime",
      ],
    },
    
  ],
};

export { emptyResume, exampleResume };
