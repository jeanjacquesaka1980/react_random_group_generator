import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleInput = e => {
    const inputNumber = e.target.value;

    if (isNaN(inputNumber)){
        alert("It's not a number !")
    } else {
        this.setState({
            input: inputNumber
          });
    }
  };

  handleButton = () => {
    alert(this.state.input);
  };

  render() {
    return (
      <div className="col-12">
        <h1>{this.state.input}</h1>
        <input
          value={this.state.input}
          onChange={this.handleInput}
          type="text"
          placeholder="How many ?"
        ></input>
        <button onClick={this.handleButton} type="button" >Click</button>
      </div>
    );
  }
}

export default Input;
