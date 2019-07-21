import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    const users = this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>;
    });
    return (
      <div>
        {this.props.userCount}
        <ul>Users! {users}</ul>
      </div>
    );
  }
}

//add mapStateToProps here

const mapStateToProps = state => {
  debugger;
  return { users: state.users, userCount: state.users.length };
};

export default connect(mapStateToProps)(Users);
