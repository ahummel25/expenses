import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import { expenses } from '../fixtures/expenses';

describe('test the ExpenseForm with expense data passed in', () => {

  test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]}/>);
    expect(wrapper).toMatchSnapshot();
  });

});

describe('test the ExpenseForm with no expense data passed in', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
  });

  afterEach(() => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render error for invalid form submission', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper.state('error')).toBe('Please provide description and amount.');
  });

  test('should set description on input change', () => {
    const value = 'New Description';
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
  });

  test('should set note on textarea change', () => {
    const value = 'This is my expense note';
    wrapper.find('textarea').simulate('change', {
      target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
  });

  test('should set amount with valid value', () => {
    const value = '12.50';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
  });

  test('should not set amount with invalid value', () => {
    const value = '20.123';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('amount')).not.toBe(value);
  });

});