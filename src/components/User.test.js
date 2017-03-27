import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import User from './User';

const user = {
  'name': '',
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
  ],
  'url': '',
  'playcount': '',
  'registered':{
    '#text': '',
    'unixtime': ''
  }
};

describe('<User /> componemts', () => {
  const wrapper = shallow(<User user={user}/>);

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
