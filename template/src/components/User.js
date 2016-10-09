import React from 'react';
import './User.css';

let User = React.createClass ({

  render() {
    const {
      name,
      playcount,
      date
    } = this.props;

    return (
      <div
        className="User">
        <ul
          className="User__info">
          <li>{name}</li>
          <li>{playcount}</li>
          <li>{date}</li>
        </ul>
      </div>
    );
  }
});

export default User;
