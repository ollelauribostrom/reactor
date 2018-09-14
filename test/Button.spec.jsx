import React from 'react';
import { shallow } from 'enzyme';
import Button from '../src/components/Button';

describe('Tests for Button', () => {
  test('renders correctly', () => {
    const button = shallow(<Button name="test" onClick={() => jest.fn()} />);
    expect(button).toMatchSnapshot();
  });
  test('invokes onClick when clicked', () => {
    const onClick = jest.fn();
    const button = shallow(<Button name="test" onClick={onClick} />);
    button.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
