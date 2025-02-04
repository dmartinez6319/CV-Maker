const FormItem = ({ item, isGrouped, setNewItem, index }) => {
  const handleChange = (e, objectItem) => {
    setNewItem((prevItems) =>
      prevItems.map((entry, idx) =>
        idx === index
          ? { ...entry, [objectItem]: { ...entry[objectItem], value: e.target.value } }
          : entry
      )
    );
  };

  const inputObjectProps = () => {
    console.log("Item:", item);

    return Object.keys(item).map((objectItem) => (
      <div key={`${index}-${objectItem}`}>
        <label>{item[objectItem].name}</label>
        <input
          type={item[objectItem].type}
          value={item[objectItem].value || ""}
          onChange={(e) => handleChange(e, objectItem)}
        />
      </div>
    ));
  };

  return isGrouped ? (
    <div className="experience-form-container">{inputObjectProps()}</div>
  ) : (
    <div>
      <label>{item.name}</label>
      <input
        type={item.type}
        value={item.value || ""}
        onChange={(e) =>
          setNewItem((prevItems) =>
            prevItems.map((entry, idx) =>
              idx === index ? { ...entry, value: e.target.value } : entry
            )
          )
        }
      />
    </div>
  );
};

export default FormItem;