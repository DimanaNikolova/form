import { Field } from "react-final-form";
import { Button } from "primereact/button";

const AddFields = (props) => {
  return (
    <div className="add-buttons-row row">
      <div>
        <label>Label</label>
        <Field
          name={"label" + props.fieldIdentifier}
          component="input"
          type="text"
          placeholder="Button label (text)"
        />
      </div>
      <div>
        <label>Value</label>
        <Field
          name={"value" + props.fieldIdentifier}
          component="input"
          type="text"
          placeholder="Button value (text)"
        />
      </div>
      <div>
        <label>Metadata</label>
        <Field
          name={"metadata" + props.fieldIdentifier}
          component="input"
          type="text"
          placeholder="/intent_name"
        />
      </div>
      <div className="col-1">
        {/* <FormButtonWrapper> */}
        <Button
          className="delete-btn d-block"
          // onClick={() => remove(index)}
          icon="fa fa-trash-o"
          type="button"
        />
        {/* </FormButtonWrapper> */}
      </div>
    </div>
  );
};

export default AddFields;
