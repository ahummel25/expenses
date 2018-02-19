import React from 'react';

const EditExpensePage = (props) => (
  <div>
    <p>This is my edit expense page for id {props.match.params.id}.</p>
  </div>
);

export default EditExpensePage;