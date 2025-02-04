const FormItem = ({ item, isGrouped, setNewItem, index }) => {
  const handleChange = (e, objectItem) => {
    setNewItem((prevItems) => {
      const updatedItems = prevItems.map((prevItem, prevIndex) => {
        if (index === prevIndex) {
          return {
            // Copy the rest of the items inside for this experience div
            ...prevItem,
            // Change a certain value inside the specific item inside experience div
            [objectItem]: {
              // Copy the rest of the item's nested elements like name or value
              ...prevItem[objectItem],
              // Change value inside it
              value: e.target.value,
            },
          };
        }
        //
        return prevItem;
      });

      // Return the updatedItems as the copied over and latest state
      return updatedItems;
    });
  };

  const inputObjectProps = () => {
    {
      console.log(item);
    }

    let itemHolder = [];

    for (let objectItem in item) {
      const selectedInput = () => {
        if (item[objectItem].type === "textarea") {
          return (
            <textarea
              key={`input-${objectItem}`}
              type={item[objectItem].type}
              value={item[objectItem].value}
              onChange={(e) => {
                handleChange(e, objectItem);
              }}
            ></textarea>
          );
        } else {
          return (
            <input
              key={`input-${objectItem}`}
              type={item[objectItem].type}
              value={item[objectItem].value}
              onChange={(e) => {
                handleChange(e, objectItem);
              }}
            ></input>
          );
        }
      };

      itemHolder.push(
        <div key = {item[objectItem].name + "-container"} className="grouped-form-container">
          {selectedInput()}
          <label key={`label-${objectItem}`}> {item[objectItem].name} </label>
        </div>
      );
    }

    console.log(itemHolder);
    return itemHolder;
  };

  if (isGrouped) {
    return <>{inputObjectProps()}</>;
  }

  if (!isGrouped) {
    return (
      <>
        <label> {item.name} </label>
        <input type={item.type}></input>
      </>
    );
  }
};

export default FormItem;
