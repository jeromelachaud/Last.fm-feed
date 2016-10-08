import React from 'react';
import './User.css';

let User = React.createClass ({

  render() {
    // const {
    //   state
    // } = this.props;

    let displayUsername;
    // if (this.state.data.user) {
    //   displayUsername = (
    //     <span>{this.state.data.user.name}</span>
    //   );
    // }

    return (
      <div
        className="User">
        {this.props.name}
      </div>
    );
  }
});

export default User;
