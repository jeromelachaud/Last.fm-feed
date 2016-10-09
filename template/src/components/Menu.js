import React from 'react';
import './Menu.css';

let Menu = React.createClass ({

  render() {

    return (
      <div>
        <ul>
          <li><a href="#0" className="Menu__item">Latest tracks</a></li>
          <li><a href="#0" className="Menu__item">Top artists</a></li>
          <li><a href="#0" className="Menu__item">Charts</a></li>
        </ul>
      </div>
    );
  }
});

export default Menu;
