import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    let props = this.props;
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(event) => {
            this.props.dispatch(setTextFilter(event.target.value));
        }} />
      <select 
        value={this.props.filters.sortBy}
        onChange={(event) => {
           callFilterFunction(event.target.value, this.props.dispatch);
        }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={this.props.filters.startDate}
        startDateId="start"
        endDate={this.props.filters.endDate}
        endDateId="end"
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
      </div>
    )
  }
};

const callFilterFunction = (filterValue, dispatch) => {
  if (filterValue === 'date') {
    this.props.dispatch(sortByDate());
  } else if (filterValue === 'amount') {
    this.props.dispatch(sortByAmount());
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);