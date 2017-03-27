import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import TopArtists from './TopArtists';

const topArtists = [];

describe('<TopArtists> component', () => {
  const wrapper = shallow(<TopArtists props={topArtists} />);

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
