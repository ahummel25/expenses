import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByDate } from '../actions/filters';
import { sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" value={props.filters.text} onChange={(event) => {
        props.dispatch(setTextFilter(event.target.value));
    }} />
    <select 
    value={props.filters.sortBy}
    onChange={(event) => {
       callFilterFunction(event.target.value, props.dispatch);
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const callFilterFunction = (filterValue, dispatch) => {
  if (filterValue === 'date') {
    dispatch(sortByDate());
  } else if (filterValue === 'amount') {
    dispatch(sortByAmount());
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);