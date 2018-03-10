import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenses } from '../fixtures/expenses';

describe('test the EditExpensePage', () => {
  let wrapper, editExpenseSpy, removeExpenseSpy, history;

  beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
                         editExpense={editExpenseSpy} 
                         removeExpense={removeExpenseSpy} 
                         history={history} 
                         expense={expenses[1]}
                         />);
    expect(wrapper).toMatchSnapshot();
  });

  afterEach(() => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });

  test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[1].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
  });

});