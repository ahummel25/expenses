import moment from 'moment';

const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: 'bills',
  sortBy: 'amount',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export { defaultFilters, altFilters };