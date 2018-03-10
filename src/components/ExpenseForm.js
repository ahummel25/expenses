import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

const now = moment().format('MMM Do, YYYY');

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }  

onDescriptionChange = (event) => {
   const description = event.target.value;
   this.setState(() => ({ description }));
};

onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({ note }));
};

onAmountChange = (event) => {
    const amount = event.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }  
};

onDateChange = (createdAt) => {
  if (createdAt) {
    this.setState(() => ({ createdAt }));
  }
};

onFocusChange = ({ focused }) => {
  this.setState(() => ({ calendarFocused: focused }));
};

onSubmit = (event) => {
  event.preventDefault();

  if (!this.state.description || !this.state.amount) {
    const error = 'Please provide description and amount.';
    this.setState(() => ({ error }));
  } else {
    this.setState(() => ({ error: '' }));
    this.props.onSubmit({
      description: this.state.description,
      amount: parseFloat(this.state.amount, 10) * 100,
      createdAt: this.state.createdAt.valueOf(),
      note: this.state.note
    })
  }
};

  render() {

    const errorStyle = {
      color: 'red',
      fontStyle: 'italic'
    };

    return (
      <div>
       {this.state.error && <p style={errorStyle}>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea 
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
            >
          </textarea>
          <button>Add expense</button>
        </form>     
      </div>
    )
  }
}

export default ExpenseForm;