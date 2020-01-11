import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Input from "../Input/Input";
import MemberCard from "../MemberCard/MemberCard";

import { image } from "faker";
import { user } from "../DataUsers/DataUsers";

class Main extends React.Component {
  state = {
    userArr: user
  };

  handleClick = id => {
    user.forEach(obj => {
      if (obj.id === id) obj.active = !obj.active;
    });
  };

  // checkIsActive = () => {
  //   console.log(user);
  // };

  render() {
    const MemberCardGenerated = this.state.userArr.map(user => {
      return (
        <MemberCard
          handleOnClick={this.handleClick}
          src={image.avatar()}
          id={user.id}
          key={user.id}
          firstName={user.name}
        />
      );
    });

    return (
      <div className="container">
        <div className="row text-center mx-auto">
          <Input />
          {MemberCardGenerated}
          {/* <button onClick={this.checkIsActive}>Active or not ? </button> */}
        </div>
      </div>
    );
  }
}

export default Main;
