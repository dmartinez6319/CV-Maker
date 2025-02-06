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
      skillCategory: ["", "", ""],
    },
    {
      skillCategory: ["", "", ""],
    },
    {
      skillCategory: ["", "", ""],
    },
  ],

  experienceSection: [
    {
        title: "",
        date: "",
        company: "",
        location: "",
        description: [
            "",
            "",
            ""
        ]
    },
    {
        title: "",
        date: "",
        company: "",
        location: "",
        description: [
            "",
            "",
            ""
        ]
    }
  ],

  projectSection: [
    {
        name: "",
        date: "",
        description: [
            "",
            "",
            ""
        ]
    }
  ]

};

export {emptyResume};
