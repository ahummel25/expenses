import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup add expense action object with provided values', () => {

   const expenseData = {
     id: expect.any(String),
     description: 'Rent',
     note: 'Last month\'s rent',
     amount: 5000,
     createdAt: 1000
   };

   const action = addExpense(expenseData);

   expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { 
      ...expenseData
    }
   });
});

test('should setup add expense action object with defaulted values', () => {

  const defaultExpenseData = {
    id: expect.any(String),
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { 
      ...defaultExpenseData
    }
  });
});

test('should edit an existing expense', () => {
  const updates = {
    note: 'This is my updated note',
    description: 'This is my updated description'
  };

  const action = editExpense('123zzz', updates);

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123zzz',
    updates: {
      note: 'This is my updated note',
      description: 'This is my updated description'
    }
  });
});

test('should remove an existing expense', () => {
  const action = removeExpense({ id: '123zzz' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123zzz'
  });
});