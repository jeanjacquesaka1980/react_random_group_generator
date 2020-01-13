import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Input from "../Input/Input";
import MemberCard from "../MemberCard/MemberCard";
import Groups from "../Groups/Groups";
import "./Main.css";

import { user } from "../DataUsers/DataUsers";

class Main extends React.Component {
  state = {
    input: 1,
    memberCard: "",
    isActive: true
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
    this.setState({
      isActive: !this.state.isActive
    });

    user.forEach(obj => {
      if (obj.id === id) obj.active = !obj.active;
    });
    // console.log(user)
  };

  handleInput = e => {
    const inputNumber = e.target.value;
    console.log(inputNumber);

    this.setState({
      input: Number(inputNumber)
    });
  };

  handleGroup = () => {
    if (
      isNaN(this.state.input) ||
      this.state.input === [] ||
      this.state.input === ""
    ) {
      alert("It's not a number !");
    }

    // checking that each user has true or false active
    const chunked_arr = [];

    user.forEach(obj => {
      // push all the true into a new array
      obj.active && chunked_arr.push(obj);
      // console.log(chunked_arr)
    });

    // modificate the order of the last array
    let currentIndex = chunked_arr.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // console.log("CurrentIndex is : " + currentIndex)

      // And swap it with the current element.
      temporaryValue = chunked_arr[currentIndex];
      // console.log("temporaryValue is : " + temporaryValue)
      chunked_arr[currentIndex] = chunked_arr[randomIndex];
      // console.log("chunked_arr[currentIndex] is : " + chunked_arr[currentIndex])
      chunked_arr[randomIndex] = temporaryValue;
      // console.log("chunked_arr[randomIndex] is : " + chunked_arr[randomIndex])
    }

    // chunk into different array the last array
    let index = 0;
    const chunked_arr_act = [];
    let value = Number(this.state.input);

    while (index < chunked_arr.length) {
      chunked_arr_act.push(chunked_arr.slice(index, value + index));
      index += value;
    }
    // console.log(chunked_arr_act);

    let groups = [];
    let groupNum = 1;

    for (let i = 0; i < chunked_arr_act.length; i++) {
      //console.log(chunked_arr_act[i])
      let newElement = chunked_arr_act[i];
      // console.log(newElement)

      const randomLeader =
        newElement[Math.floor(Math.random() * newElement.length)];

      // console.log(randomLeader)

      let newGroup = newElement.map(user => {
        const isLeader = randomLeader.id === user.id ? "bg-success" : "";
        return (
          <MemberCard
            isLeader={isLeader}
            handleOnClick={this.handleClick}
            src={user.image}
            icon={
              randomLeader.id === user.id
                ? "https://media.glassdoor.com/sqll/1527108/talent-garden-squarelogo-1498220206195.png"
                : ""
            }
            id={user.id}
            key={user.id}
            firstName={user.name}
          />
        );
      });

      // const randomLeader = newGroup[Math.floor(Math.random() * newGroup.length)];

      // console.log(newGroup[0].key)

      groups.push(<Groups groupNum={groupNum} newGroup={newGroup} />);
      groupNum += 1;
      // console.log(groupNum)

      // console.log(newGroup);
    }

    this.setState({
      memberCard: groups
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="header row text-center mx-auto">
            <h1 className="col-12 my-4">RANDOM GROUP GENERATOR</h1>
          </div>
        </div>
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
      </>
    );
  }
}

export default Main;
