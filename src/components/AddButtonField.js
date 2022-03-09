import { Field } from "react-final-form";
import { Button } from "primereact/button";
import { useState } from "react";

const AddFields = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);
  return (
    <>
      {!isDeleted && (
        <div className="add-buttons-row row col-12">
          <div className="col-3 form-control-block">
            <label>Label *</label>
            <Field
              name={"label" + props.fieldIdentifier}
              component="input"
              type="text"
              placeholder="Button label (text)"
              className="form-control"
            />
          </div>
          <div className="col-4 form-control-block">
            <label>Value</label>
            <Field
              name={"value" + props.fieldIdentifier}
              component="input"
              type="text"
              placeholder="Button value (text)"
              className="form-control"
            />
          </div>
          <div className="col-4 form-control-block">
            <label>Metadata *</label>
            <Field
              name={"metadata" + props.fieldIdentifier}
              component="input"
              type="text"
              placeholder="/intent_name"
              className="form-control"
            />
          </div>
          <div className="col-1 form-control-block">
            {/* <FormButtonWrapper> */}
            <Button
              className="delete-btn d-block icon-only"
              onClick={(e) => setIsDeleted(true)}
              icon="fa fa-trash-o"
              type="button"
            />
            {/* </FormButtonWrapper> */}
          </div>
        </div>
      )}
    </>
  );
};

export default AddFields;
