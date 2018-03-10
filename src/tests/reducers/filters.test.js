import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'amount' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'date' });
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'Some text'
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(action.text);
});

test('should set startDate filter', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment(new Date())
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(action.startDate);
});

test('should set endDate filter', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment(new Date()).add(5, 'days')
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(action.endDate);
});