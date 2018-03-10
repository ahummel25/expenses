import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../components/PageNotFound';

test('should render PageNotFound', () => {
  const wrapper = shallow(<PageNotFound />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('p').length).toBe(1);
  expect(wrapper.find('p').text()).toContain('404! Page Not Found.');
});