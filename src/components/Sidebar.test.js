import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import Sidebar from './Sidebar';
import Menu from './Menu';
const user = {};

describe('<Sidebar /> componemts', () => {
  const wrapper = shallow(<Sidebar user={user} />);

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should have a Logo component', () => {
    expect(wrapper.find('Logo').length).toBe(1);
  });

  it('should have a <Menu /> component', () => {
    expect(wrapper.find(Menu).length).toBe(1);
  });
});
