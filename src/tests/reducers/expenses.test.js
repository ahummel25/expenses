import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import { expenses } from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, '@@INIT');
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
   const action = {
     type: 'REMOVE_EXPENSE',
     id: expenses[1].id
   };
   const state = expensesReducer(expenses, action);
   expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id + 'zzzz'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'Rent',
      note: 'Last month\'s rent',
      amount: 5000,
      createdAt: moment(new Date())
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit an expense', () => {

  const updates = {
    description: 'Rent Again'
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe('Rent Again');
});

test('should not edit an expense if expense id not found', () => {

  const updates = {
    description: 'Rent Again'
  };

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id + 'zzzz',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});

