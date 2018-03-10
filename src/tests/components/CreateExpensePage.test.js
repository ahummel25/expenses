import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpensePage } from '../../components/CreateExpensePage';
import { expenses } from '../fixtures/expenses';

describe('test the CreateExpensePage', () => {
  let wrapper, addExpenseSpy, history;

  beforeEach(() => {
    addExpenseSpy = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<CreateExpensePage addExpense={addExpenseSpy} history={history}/>);
    expect(wrapper).toMatchSnapshot();
  });

  afterEach(() => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });

});