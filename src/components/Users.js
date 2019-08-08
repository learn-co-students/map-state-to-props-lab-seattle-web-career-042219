import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
      	<p>User Count: {this.props.userCount}</p>
        <ul>
          {this.props.users.map(user => {
          	return <li key={user.username + user.hometown}>{user.username}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return { 
		users: state.users,
		userCount: state.users.length
	}
}

export default connect(mapStateToProps)(Users)
