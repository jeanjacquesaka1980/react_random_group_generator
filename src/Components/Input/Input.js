import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Input.css";

const Input = props => {
  const { value, onChange, handleGroup } = props;
  return (
    <div className="col-12">
      <div className="input-group my-3">
        <input
          className="form-control"
          value={value}
          onChange={onChange}
          type="number"
          placeholder="How many persons would you like per group ?"
        ></input>
        <div className="input-group-append">
          <button
            onClick={handleGroup}
            type="button"
            className="btn btn-generate"
          >
            Generate !
          </button>
        </div>
      </div>

      {/* <div className="input-group my-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            How many persons would you like per group ?
          </button>
          <div className="dropdown-menu">
            <option className="dropdown-item" onChange={props.onChange} value="1">1</option>
            <option className="dropdown-item" onChange={props.onChange} value="2">2</option>
            <option className="dropdown-item" onChange={props.onChange} value="3">3</option>
            <option className="dropdown-item" onChange={props.onChange} value="4">4</option>
          </div>
        </div>

        <div className="input-group-append">
          <button
            onClick={props.handleGroup}
            type="button"
            className="btn btn-generate"
          >
            Generate !
          </button>
        </div>
      </div> */}

    </div>
  );
};

export default Input;
