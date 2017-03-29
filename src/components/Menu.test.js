import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import Menu from './Menu';
import {
  Link
} from 'react-router';
const user = {};

describe('<Menu /> componemts', () => {
  const wrapper = shallow(<Menu user={user} />);

  it('should render as expected', () => {
    expect (toJson(wrapper)).toMatchSnapshot();
  });

  it('should have three <li> tags', () => {
    expect(wrapper.find('li').length).toBe(3);
  });

  it('should have three <li> tags with a className of "Menu__item"', () => {
    expect(wrapper.find('li').find('.Menu__item').length).toBe(3);
  });
 
  it('should have three <Link /> components', () => {
    expect(wrapper.find(Link).length).toBe(3);
  });

  it ('should have one <Link /> components with the id of "toggleUser"', () => {
    expect(wrapper.find('#toggleUser').length).toBe(1);
  });

  it ('should have a showUSer state set to false per default', () => {
    expect(wrapper.state().showUser).toBe(false);
  });

  it ('simulates clicks event on the <Link /> components with the id of "toggleUser and toggle the showUSer to true and false',() => {
    wrapper.find('#toggleUser').simulate('click');
    expect(wrapper.state().showUser).toBe(true);
    wrapper.find('#toggleUser').simulate('click');
    expect(wrapper.state().showUser).toBe(false);
  });
});
