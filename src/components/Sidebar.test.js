import React from 'React';
import {
  shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import Sidebar from './Sidebar';

describe('Sidebar componemts', () => {
  it('should render as expected', () => {
    const sidebarComponent = shallow(<Sidebar />);
    expect(toJson(sidebarComponent)).toMatchSnapshot();
  });
});
