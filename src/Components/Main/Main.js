import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Input from "../Input/Input";
import MemberCard from "../MemberCard/MemberCard";

import { user } from "../DataUsers/DataUsers";

class Main extends React.Component {
  state = {
    input: "",
    memberCard: "",
    leader: false
  };

  componentDidMount() {
    const MemberCardGenerated = user.map(user => {
      return (
        <MemberCard
          className="col-4"
          handleOnClick={this.handleClick}
          src={user.image}
          icon={user.icon}
          id={user.id}
          key={user.id}
          firstName={user.name}
        />
      );
    });
    this.setState({
      memberCard: MemberCardGenerated
    });
  }

  handleClick = id => {
    user.forEach(obj => {
      if (obj.id === id) obj.active = !obj.active;
    });
  };

  handleInput = e => {
    const inputNumber = e.target.value;

    if (isNaN(inputNumber)) {
      alert("It's not a number !");
    } else {
      this.setState({
        input: inputNumber
      });
    }
  };

  handleGroup = (id) => {
    let value = Number(this.state.input);
    const chunked_arr = [];
    const chunked_arr_act = [];
    let index = 0;

    if (
      isNaN(this.state.input) ||
      this.state.input === [] ||
      this.state.input === ""
    ) {
      alert("It's not a number !");
    }

    // checking that each user has true or false active
    user.forEach(obj => {
      if (obj.active) {
        // push all the true into a new array
        chunked_arr.push(obj);
      }
      //console.log(chunked_arr)
    });

    // modificate the order of the last array
    let currentIndex = chunked_arr.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = chunked_arr[currentIndex];
      chunked_arr[currentIndex] = chunked_arr[randomIndex];
      chunked_arr[randomIndex] = temporaryValue;
    }

    // chunk into different array the last array
    while (index < chunked_arr.length) {
      chunked_arr_act.push(chunked_arr.slice(index, value + index));
      index += value;
    }
    // console.log(chunked_arr_act);

    let groups = [];

    for (let i = 0; i < chunked_arr_act.length; i++) {
      //console.log(chunked_arr_act[i])
      let newElement = chunked_arr_act[i];
      //console.log(newElement)

      const randomLeader = newElement[Math.floor(Math.random() * newElement.length)];

      console.log(randomLeader)
      
      let newGroup =  newElement.map(user => {
        return (
          <MemberCard
            className="col-4"
            handleOnClick={this.handleClick}
            src={user.image}
            icon={randomLeader.id === user.id ? "http://www.linzwiki.at/w/images/2/2c/Star-icon.png" : ""}
            id={user.id}
            key={user.id}
            firstName={user.name}
          />
        );
      });

      // const randomLeader = newGroup[Math.floor(Math.random() * newGroup.length)];

      // console.log(newGroup[0].key)

      groups.push(
        <div className="row border border-danger p-3 m-3">
          <h2 className="col-12 m-3">GROUP</h2>
          {newGroup}
        </div>
      );

      console.log(newGroup);
    }

    this.setState({
      memberCard: groups,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row text-center mx-auto">
          <Input
            value={this.state.input}
            onChange={this.handleInput}
            handleGroup={this.handleGroup}
          />
          {/* <button onClick={this.checkIsActive}>Active or not ? </button> */}
        </div>
        <div className="row text-center mx-auto">{this.state.memberCard}</div>
      </div>
    );
  }
}

export default Main;
