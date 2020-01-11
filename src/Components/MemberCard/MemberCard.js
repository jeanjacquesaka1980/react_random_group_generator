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
      <div className="col-4">
        <div className="card mb-3 border-0 shadow">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={this.props.src} className="card-img" alt="..."></img>
            </div>
            <div className="col-md-8">
              <div className="card-body float-right">
                <p className="card-text">{this.props.firstName}</p>
                {this.state.isActive ? (
                  <button
                    onClick={() => this.handleClick(this.props.id)}
                    // onClick={this.handleClick}
                    type="button"
                    class="btn btn-success"
                  >
                    Active
                  </button>
                ) : (
                  <button
                    onClick={() => this.handleClick(this.props.id)}
                    // onClick={this.handleClick}
                    type="button"
                    class="btn btn-danger"
                  >
                    Not Active
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberCard;
