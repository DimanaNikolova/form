import { useState, useEffect } from "react";

import { Button } from "primereact/button";
import FormArea from "./FormArea";
import "./Control.css";
import "./FormContainer.css";

const FormContainer = (props) => {
  const [responseList, setResponseList] = useState([]);

  const concatResponseList = () => {
    return responseList.concat(
      <FormArea
        key={responseList.length}
        responseIdentifier={responseList.length}
      />
    );
  };

  const onAddResponseClick = (event) => {
    setResponseList(concatResponseList());
  };

  useEffect(() => {
    onAddResponseClick();
  }, []);

  return (
    <div className="mb-4 mt-2 container-fluid pop-up-container">
      {responseList}
      <section>
        <Button
          type="button"
          className="add-btn"
          icon="fa fa-plus-circle"
          tooltip={"Add new response"}
          label="ADD NEW RESPONSE"
          tooltipOptions={{ position: "top" }}
          onClick={onAddResponseClick}
        />
      </section>
    </div>
  );
};

export default FormContainer;

//opravi dizaina sprqmo koda na roboadvisor
//napravi trash butona dca raboti
//napravi delete response da raboti
//napravi go da se pokazva i kato pop up
//proveri renderinga kak e
//izmisli adekvaten naming

//napravi readme i opishi vsichko
