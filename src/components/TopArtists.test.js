import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import TopArtists from './TopArtists';

describe('<TopArtists> component', () => {
  const wrapper = shallow(<TopArtists/>);

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
