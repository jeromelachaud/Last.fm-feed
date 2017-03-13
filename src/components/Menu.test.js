import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import Menu from './Menu';

describe('Menu componemts', () => {
  it('Menu component should render as expected', () => {
    const menuComponent = shallow(<Menu />);
    expect(toJson(menuComponent)).toMatchSnapshot();
  });
});
