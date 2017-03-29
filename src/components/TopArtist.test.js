import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import TopArtist from './TopArtist';

const topArtist = {
  'image': [
    {
      '#text': ''
    },
    {
      '#text': ''
    },
    {
      '#text': ''
    },
    {
      '#text': ''
    }
  ]
};

describe('<TopArtist> component', () => {
  const wrapper = shallow(<TopArtist topArtist={topArtist} />);

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
