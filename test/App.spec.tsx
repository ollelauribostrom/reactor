import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

describe('Tests for App', () => {
  test('it renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
  test('it handles clicks', () => {
    const wrapper = shallow(<App />);
    wrapper.find('.reactor-icon').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
