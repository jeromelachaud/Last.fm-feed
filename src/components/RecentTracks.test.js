import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import RecentTracks from './RecentTracks';

const recentTracks = [];

describe('<RecentTracks> component', () => {
  const wrapper = shallow(<RecentTracks recentTracks={recentTracks} />);

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
