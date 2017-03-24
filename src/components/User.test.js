import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import User from './User';

const user = {
  'user':'a user'
};

describe('<User /> componemts', () => {
  const wrapper = shallow(<User user={user}/>);

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
