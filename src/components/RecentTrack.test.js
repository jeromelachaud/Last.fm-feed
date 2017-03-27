import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import RecentTrack from './RecentTrack';

const recentTrack = {
  'name': 'a name',
  'image': [
    {'#text' : 'album'},
    {'#text' : 'album'},
    {'#text' : 'album'},
    {'#text' : 'album'}
  ],
  'artist': ['#text'],
  'album': ['#text'],
  'date': ['#test']
};

describe('<RecentTrack /> componemts', () => {
  const wrapper = shallow(<RecentTrack recentTrack={recentTrack}/>);

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
