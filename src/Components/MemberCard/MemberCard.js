import React from "react";
import './MemberCard.css';
import "bootstrap/dist/css/bootstrap.css";
//import { user } from "../DataUsers/DataUsers";

class MemberCard extends React.Component {
  state = {
    isActive: true,
  };

  handleClick = id => {
    this.props.handleOnClick(id);

    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <div className={this.props.className}>
        <div className="card mb-3 border-0 shadow">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props.src} className="card-img rounded-circle shadow" alt="..."></img>
            </div>
            <div className="col-md-8">
              <div className="card-body float-right">
                <p className="card-text">{this.props.firstName}</p>
                <img className="icon" src={this.props.icon}></img>
                <button
                    onClick={() => this.handleClick(this.props.id)}
                    // onClick={this.handleClick}
                    type="button"
                    className={this.state.isActive ? `${"btn btn-success"}` : `${"btn btn-danger"}`}
                  >
                    {this.state.isActive ? `${"Active"}` : `${"Inactive"}`}
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberCard;
