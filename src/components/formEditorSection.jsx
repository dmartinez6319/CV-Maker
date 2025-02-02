/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AddButton from "./addNewItem";
import FormItem from "./editFormItem";

const EditSection = ({ title, canAdd, editItems, isGrouped }) => {
  const [formItems, setNewItem] = useState(editItems);
  const [template] = useState(formItems[0])

  const addNewItem = (e) => {
    e.preventDefault();
    if (!isGrouped) {
        setNewItem((prevItems) => [...prevItems, template]);
    }
    if (isGrouped) {
        setNewItem((prevItems) => [...prevItems, template])
    }
  };


  return (
    <div className="form-edit-section">
      <h1>{title}</h1>

      <form action="">
        {  console.log(editItems + title)
        }
        {isGrouped &&
          formItems.map((item, index) => {
            return (
              <React.Fragment key={crypto.randomUUID()}>

                <FormItem key={crypto.randomUUID()} item = {item} index = {index} isGrouped = {isGrouped} setNewItem = {setNewItem}/>
              </React.Fragment>
            );
          })}

        {!isGrouped &&
          formItems.map((item, index) => {
            return (
              <React.Fragment key={crypto.randomUUID()}>
                <FormItem key={crypto.randomUUID()} item = {item} index = {index} isGrouped = {isGrouped} setNewItem = {setNewItem}/>


              </React.Fragment>
            );
          })}

        {canAdd && <AddButton addNewItem={addNewItem} />}
      </form>
    </div>
  );
};

export default EditSection;
