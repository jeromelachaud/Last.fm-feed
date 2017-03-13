import React from 'React';
import {
  shallow
} from 'enzyme';
import Menu from './Menu';

describe('Menu componemts', () => {
  it('Menu component should render as expected', () => {
    const component = shallow(<Menu />);
    console.log(component);
  });
});
