import React from 'react';
import './Lists.css';
import LatestTracks from './LatestTracks';

let Lists = React.createClass ({

  render() {
    const {
      name,
      playcount
    } = this.props.user;

    return (
      <section
        className="Lists">
        <LatestTracks
          />
      </section>
    );
  }
});

export default Lists;
