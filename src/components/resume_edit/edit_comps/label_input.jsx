const LabelInput = ({
  labelName,
  setResumeData,
  targetValue,
  grouped,
  objectIndex,
  section,
  nested,
  list,
  listItem,
  itemIndex,
  select,
  value,
}) => {
  const groupedForm = (e) => {
    // setResumeData((prevData) => ({

    //   ...prevData, // Restore all the other objects
    //   [section]: prevData[section].map( // Go through all the objects inside the array
    //     (
    //       item,
    //       idx
    //     ) =>
    //       idx === objectIndex // find the selected object
    //         ? { ...item, [targetValue]: e.target.value } // Update the target object
    //         : item // Restore the other objects inside the array
    //   ),

    // }));

    // setResumeData( (prevData) => {
    //     const updatedSection = [...prevData[section]];

    //     updatedSection[objectIndex] = {
    //         ...updatedSection[objectIndex],
    //         [targetValue]: e.target.value
    //     }

    //     return {...prevData, [section]: updatedSection}

    // })

    setResumeData((prevData) => {
      // Clone the array so React knows it's changed
      const updatedSection = [...prevData[section]];
      updatedSection[objectIndex] = {
        ...updatedSection[objectIndex], // Copy the existing object
        [targetValue]: e.target.value, // Only update the changed field
      };

      return {
        ...prevData,
        [section]: updatedSection, // Replace only this section with the updated array
      };
    });
  };

  const ungroupedForm = (e) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [targetValue]: e.target.value,
      },
    }));
  };

  const listForm = (e) => {
    // setResumeData((prevData) => ({

    //   ...prevData,
    //   [section]: prevData[section].map((item, idx) =>

    //     idx === objectIndex

    //       ? {
    //           ...item,
    //           [listName]: item[listName].map((skill, skIndex) =>
    //             skIndex === objectIndex ? e.target.value : skill
    //           ),
    //         }
    //       : item

    //   ),

    // }));

    setResumeData((prevData) => ({
      // When this is called we are given the Section (skillSection) and index of item (objectIndex)

      // We need to replace data wherever we traverse using the ...spread operator
      ...prevData,
      // In the next comma we are moving a step closer to where we need to go and eventually change
      [section]: prevData[section].map(
        (
          skillObject,
          idx // We recreate the items inside the array that contain the objects
        ) =>
          idx === objectIndex // If we find the correct skillCategory go inside
            ? {
                ...skillObject,
                [listItem]: skillObject[listItem].map((item, itemIdx) =>
                  itemIdx === itemIndex ? e.target.value : item
                ), // Go into the skillCategory
              } // If its not the seleceted skillCategory Copy it and return it
            : skillObject
      ),
    }));

    // setResumeData((prevData) => ({
    //     ...prevData,
    //     [section]: prevData[section].map((skillObject, idx) =>
    //       idx === objectIndex // Check if it's the correct skill object
    //         ? {
    //             ...skillObject, // Copy the skill object
    //             skillCategory: skillObject.skillCategory.map((skill, skillIdx) =>
    //               skillIdx === itemIndex // Check if it's the target skill in the skillCategory array
    //                 ? e.target.value // Update the skill at the correct index
    //                 : skill // Keep the other skills unchanged
    //             ),
    //           }
    //         : skillObject // If not the selected skill object, return it unchanged
    //     ),
    //   }));
  };

  const nestedForm = (e) => {
    // i assume its only header info section
    setResumeData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        info: {
          ...prevData[section].info,
          [targetValue]: e.target.value,
        },
      },
    }));
  };
  return (
    <div className="formInput">
      <label htmlFor={labelName}>{labelName}</label>
      <input
        type="text"
        name={labelName}
        id={labelName}
        value={value}
        onChange={(e) => {
          if (select) {
            ungroupedForm(e);
          }
          if (grouped) {
            groupedForm(e);
          }
          if (list) {
            listForm(e);
          }
          if (nested) {
            nestedForm(e);
          }
        }}
      />
    </div>
  );
};

export default LabelInput;
