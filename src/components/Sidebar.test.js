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

  it('should have a .Sidebar class', () => {
    expect(wrapper.find('.Sidebar').length).toBe(1);
  });

  it('should have a <img> tag', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

  it('should have a <img> tag with a className of "Logo"', () => {
    expect(wrapper.find('img').find('.Logo').length).toBe(1);
  });

  it('should have a <Menu /> component', () => {
    expect(wrapper.find(Menu).length).toBe(1);
  });
});
