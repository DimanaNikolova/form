import { Form, Field } from "react-final-form";
import { useState } from "react";

import { Button } from "primereact/button";
import AddFields from "./AddButtonField";
import "./Control.css";

const FormArea = (props) => {
  const [inputList, setInputList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const onSubmit = () => {
    console.log("onsubmit e triggered");
  };

  const onAddBtnClick = (event) => {
    // inputList.push([]);
    // setInputList([...inputList], []);
    setInputList(
      inputList.concat(
        <AddFields key={inputList.length} fieldIdentifier={inputList.length} />
      )
    );
  };

  return (
    <>
      {!isDeleted && (
        <div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-row justify-content-between align-items-end">
                <h4 className="mb-0">Response</h4>
                <Button
                  label="Delete response"
                  className="delete-btn"
                  icon="fa fa-minus"
                  type="button"
                  onClick={(e) => setIsDeleted(true)}
                />
              </div>

              <hr />
            </div>
          </div>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              stooge: "larry",
              employed: false,
              messageType: "text",
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <label>Message type</label>
                  <Field name="messageType" component="select">
                    <option />
                    <option value="text">Text</option>
                    <option value="button">Button</option>
                  </Field>
                </div>
                {values.messageType == "text" ? (
                  <div className="row">
                    <label>Message Text</label>
                    <Field
                      name="notes"
                      component="textarea"
                      placeholder="Enter  text and/or URL"
                    />
                  </div>
                ) : (
                  <>
                    <div className="row">
                      {/* {inputList.map((input, index) => {
                    return <AddFields key={index} fieldIdentifier={index} />;
                  })} */}
                      {inputList}
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <Button
                          className="p-button p-component add-btn"
                          onClick={onAddBtnClick}
                          icon="fa fa-plus-circle"
                          label="Add button"
                          type="button"
                        />
                      </div>
                    </div>
                  </>
                )}
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )}
          />
        </div>
      )}
    </>
  );
};

export default FormArea;
