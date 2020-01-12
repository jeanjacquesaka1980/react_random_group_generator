import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   input: ""
    // };
  }

  // handleInput = e => {
  //   const inputNumber = e.target.value;

  //   if (isNaN(inputNumber)) {
  //     alert("It's not a number !");
  //   } else {
  //     this.setState({
  //       input: inputNumber
  //     });
  //   }
  // };

  // handleButton = () => {
  //   alert(this.state.input);
  // };

  render() {
    return (
      <div className="col-12">
        <div className="input-group my-3">
          <input
            className="form-control"
            value={this.props.value}
            onChange={this.props.onChange}
            type="number"
            placeholder="How many persons would you like per group ?"
          ></input>
          <div className="input-group-append">
            <button onClick={this.props.handleGroup} type="button" className="btn btn-success">
              Generate !
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
