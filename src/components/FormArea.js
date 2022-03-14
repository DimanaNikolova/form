import { Form, Field, FormSpy } from "react-final-form";
import { useState } from "react";

import { Button } from "primereact/button";
import AddFields from "./AddButtonField";

import "./Control.css";

const FormArea = ({ subscription }) => {
  const [inputList, setInputList] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const onSubmit = (e) => {
    console.log(e);
  };

  const onAddBtnClick = () => {
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
            onSubmit={(e) => onSubmit(e)}
            initialValues={{
              messageType: "text",
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div className="row col-4 form-control-block">
                  <label>Message type</label>
                  <Field
                    name="messageType"
                    component="select"
                    className="form-control trunkate"
                  >
                    <option />
                    <option value="text">Text</option>
                    <option value="button">Button</option>
                  </Field>
                </div>

                {values.messageType == "text" ? (
                  <div className="row col-4 form-control-block">
                    <label>Message Text</label>
                    <Field
                      name="notes"
                      component="textarea"
                      placeholder="Enter  text and/or URL"
                      className="form-control"
                    />
                  </div>
                ) : (
                  <>
                    <div className="row">{inputList}</div>
                    <div className="row col-12">
                      <Button
                        className="p-button p-component add-btn"
                        onClick={onAddBtnClick}
                        icon="fa fa-plus-circle"
                        label="Add button"
                        type="button"
                      />
                    </div>
                  </>
                )}
              </form>
            )}
          />
          <hr />
        </div>
      )}
    </>
  );
};

export default FormArea;
