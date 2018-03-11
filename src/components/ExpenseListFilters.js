import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarFocused: null
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = (event) => {
    this.props.setTextFilter(event.target.value);
  };

  onSortChange = (event) => {
    if (event.target.value === 'date') {
      this.props.sortByDate();
    } else if (event.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    let props = this.props;
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
      <select 
        value={this.props.filters.sortBy}
        onChange={this.onSortChange}>
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

const mapStateToProps = (state) => ({ filters: state.filters });

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);