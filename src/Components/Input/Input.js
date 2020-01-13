import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Input.css";

const Input = props => {
  const { value, onChange, handleGroup } = props;
  return (
    <div className="col-12">
      <div className="input-group my-3">
        <select value={value} onChange={onChange} class="custom-select" id="inputGroupSelect01">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>

        <div className="input-group-append">
          <button
            onClick={handleGroup}
            type="button"
            className="btn btn-generate"
          >
            Generate !
          </button>
          {/* <button onClick={console.log(value)}>check</button> */}
        </div>
      </div>
    </div>
  );
};

export default Input;
