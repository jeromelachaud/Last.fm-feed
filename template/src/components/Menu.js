import React from 'react';
import {
  Link
} from 'react-router';
import './Menu.css';
import User from './User';

let Menu = React.createClass ({

  getInitialState() {
    return { showResults: false };
  },

  onClick(e) {
    e.preventDefault(e);
    if (this.state.showResults === false) {
      this.setState({showResults : true});
    } else {
      this.setState({showResults : false});
    }
  },

  render() {

    const {
      user
    } = this.props;

    let userElement;
    userElement = (
      <User
        user={user} />
    );

    return (
      <div>
        <ul>
          <li>
            <Link to="recent-tracks" className="Menu__item">Latest track</Link>
          </li>
          <li>
            <Link to="top-artists" className="Menu__item">Top artists</Link>
          </li>
          <li>
            <a href="#0" className="Menu__item">Charts</a>
          </li>
          <li>
            <Link className="Menu__item" onClick={this.onClick}>User infos</Link>
          </li>
        </ul>
        {this.state.showResults ? userElement : null}
      </div>
    );
  }
});

export default Menu;
