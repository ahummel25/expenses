import React from 'react';
import moment from 'moment';
import numeraljs from 'numeraljs';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, note, createdAt }) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
    ${numeraljs(amount / 100).format('$0,0.00')}
    - 
    {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem