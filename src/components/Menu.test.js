import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import Menu from './Menu';

describe('Menu componemts', () => {
  const menuComponent = shallow(<Menu />);

  it('should render as expected', () => {
    expect(toJson(menuComponent)).toMatchSnapshot();
  });
});
