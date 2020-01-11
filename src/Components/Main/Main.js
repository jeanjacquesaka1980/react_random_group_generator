import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Input from "../Input/Input";
import MemberCard from "../MemberCard/MemberCard";

import { image } from "faker";
import { USER } from "../DataUsers/DataUsers";
import { ISACTIVE } from "../IsActive/IsActive";

let userActive = USER.map((user) => {
  return user.active
})
console.log(userActive)

class Main extends React.Component {
  state = {
    userArr: USER
  }

  handleClick = (id) => {
    // userActive = false;
    console.log(userActive)
    console.log(id)
  }

  checkIsActive = () => {
    console.log(ISACTIVE);
  }

  render (){

    const MemberCardGenerated = this.state.userArr.map((user) => {
      return <MemberCard handleOnClick={this.handleClick} src={image.avatar()} id={user.id} key={user.id} firstName={user.name}/>
    })

    return (
      <div className="container">
        <div className="row text-center mx-auto">
          <Input />
          {MemberCardGenerated}
          <button onClick={this.checkIsActive}>Active or not ? </button>
        </div>
      </div>
    );
  }
};

export default Main;
