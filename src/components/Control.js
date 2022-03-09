import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import { InputSwitch } from "primereact/inputswitch";
import { Tooltip } from "primereact/tooltip";
import { Controller } from "react-hook-form";
import { FileUpload } from "primereact/fileupload";
import RoboadvisorService from "../../../services/roboadvisor.service";
import "./Control.css";

const Control = (props) => {
  const innerSubmit =
      props.innerSubmitLabel && props.onInnerSubmit ? (
        <button className="inner-submit" onClick={props.onInnerSubmit}>
          {props.innerSubmitLabel}
        </button>
      ) : null,
    hasInnerSubmit = props.innerSubmitLabel && props.onInnerSubmit;

  let inputElement = null,
    inputClasses = props.error ? " invalid-input" : "";
  switch (props.type) {
    case "text":
    case "username":
    case "password":
    case "number":
    case "email":
      inputElement = (
        <input
          {...props.elementConfig}
          id={props.id}
          disabled={props.disabled}
          className={"form-control" + inputClasses}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type={props.type}
          placeholder={props.placeholder}
          ref={props.registerRef && props.registerRef()}
          name={props.name}
          defaultValue={props.value}
          step={props.step}
          min={props.min}
          max={props.max}
          onKeyPress={props.onKeyPress}
          autoComplete="off"
        />
      );
      break;
    case "checkbox":
      inputElement = (
        <Controller
          defaultValue={props.value || false}
          control={props.control}
          name={props.name}
          rules={props.registerRef()}
          render={({ onChange, onBlur, value, name }) => (
            <Checkbox
              className="c-check"
              onBlur={onBlur}
              onChange={(e) => {
                if (props.onChange) {
                  props.onChange(e);
                }
                onChange(e.target.checked);
              }}
              checked={props.value || false}
              name={name}
            />
          )}
        />
      );
      break;
    case "datepicker":
      inputElement = (
        <Controller
          defaultValue={props.value || null}
          control={props.control}
          name={props.name}
          rules={props.registerRef()}
          render={({ onChange, onBlur, value, name }) => (
            <>
              <Calendar
                {...props.elementConfig}
                showTime={props.showTime}
                value={value}
                id={props.id}
                onChange={(e) => {
                  if (props.onChange) {
                    props.onChange(e);
                  }
                  onChange(e.target.value);
                }}
                onBlur={props.blur}
                onFocus={props.onFocus}
                dateFormat={RoboadvisorService.datepickerFormat}
                showIcon={true}
                viewDate={props.viewDate}
                onViewDateChange={props.onViewDateChange}
              />
            </>
          )}
        />
      );
      break;
    case "timepicker":
      inputElement = (
        <Controller
          defaultValue={props.value || null}
          control={props.control}
          name={props.name}
          rules={props.registerRef()}
          render={({ onChange, onBlur, value, name }) => (
            <>
              <Calendar
                value={value}
                id={props.id}
                onChange={(e) => {
                  if (props.onChange) {
                    props.onChange(e);
                  }
                  onChange(e.target.value);
                }}
                timeOnly
                showTime
                hourFormat="24"
                showIcon
                icon="pi pi-clock"
              />
            </>
          )}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          id={props.id}
          disabled={props.disabled}
          className={"form-control" + inputClasses}
          onChange={props.onChange}
          onBlur={props.onBlur}
          placeholder={props.placeholder}
          ref={props.registerRef && props.registerRef()}
          name={props.name}
          defaultValue={props.value}
          style={props.style}
          onKeyPress={props.onKeyPress}
        ></textarea>
      );
      break;
    case "select":
      inputElement = (
        // use labelAs and valueAs instead of reformatting incomming data
        <select
          {...props.elementConfig}
          id={props.id}
          disabled={props.disabled}
          className={"form-control trunkate" + inputClasses}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={props.registerRef && props.registerRef()}
          name={props.name}
          defaultValue={props.value}
          size={props.size}
        >
          <option value="" disabled>
            Select your option
          </option>
          {props.options && props.options.length ? (
            props.options.map((option, index) => (
              <option
                value={props.valueAs ? option[props.valueAs] : option.value}
                key={index}
                className={option.className ? option.className : ""}
              >
                {props.labelAs ? option[props.labelAs] : option.label}
              </option>
            ))
          ) : (
            <option value="" disabled>
              Empty results
            </option>
          )}
        </select>
      );
      break;
    case "inputswitch":
      inputElement = (
        <Controller
          defaultValue={props.value || false}
          control={props.control}
          name={props.name}
          render={({ onChange, onBlur, value, name }) => (
            <InputSwitch
              checked={props.value}
              onBlur={onBlur}
              onChange={(e) => {
                if (props.onChange) {
                  props.onChange(e);
                }
                onChange(e.target.value);
              }}
            />
          )}
        />
      );
      break;
    case "fileupload":
      inputElement = (
        <Controller
          control={props.control}
          name={props.name}
          render={({ onChange, onBlur, value, name }) => (
            <FileUpload
              ref={props.forwardRef}
              label={props.label}
              fileLimit={props.fileLimit ? props.fileLimit : 1}
              uploadHandler={(e) => {
                if (props.uploadHandler) {
                  props.uploadHandler(e);
                }
              }}
              onSelect={props.onSelect}
              customUpload={true}
              accept={props.accept}
              auto={props.auto}
              emptyTemplate={props.emptyTemplate}
              multiple={props.multiple ? true : false}
            />
          )}
        />
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          className={"form-control" + inputClasses}
          value={props.value}
          id={props.id}
          onChange={props.changed}
          ref={props.registerRef && props.registerRef()}
          defaultValue={props.value}
          name={props.name}
        />
      );
  }

  let control = (
    <div
      className={`form-control-block ${
        hasInnerSubmit ? "has-inner-submit" : ""
      }`}
    >
      {props.label ? (
        <label className={props.labelClass} htmlFor="">
          {props.label}&nbsp;
          {props.info ? (
            <>
              <span data-pr-tooltip={props.info} className="label-info">
                <i className="fa fa-info" aria-hidden="true"></i>
              </span>
              <Tooltip target={`.label-info`} />
            </>
          ) : null}
        </label>
      ) : null}
      {inputElement}
      {innerSubmit}
      {props.error ? <p className="error-message">{props.error}</p> : null}
    </div>
  );

  if (props.inLabel) {
    let labelClasses =
      (props.labelClass ? props.labelClass : "") +
      (props.error ? " error-label-color" : "") +
      (props.type === "checkbox" ? " checkbox-label" : "");
    control = (
      <label className={labelClasses}>
        {inputElement}
        {props.label}
      </label>
    );
  }

  return control;
};

export default Control;
