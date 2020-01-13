import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Groups.css";

const Groups = (props) => {
  const { groupNum, newGroup, children } = props;

  return (
    <div className="groupBox row p-3 m-3 shadow">
    <h2 className="col-12 m-3">GROUP {groupNum}</h2>
    {children}
    {newGroup}
  </div>
  )
};

export default Groups;
