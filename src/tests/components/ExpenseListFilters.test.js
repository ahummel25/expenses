import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, altFilters } from '../fixtures/filters';

describe('test the EditExpensePage', () => {
  let wrapper, setStartDateSpy, setEndDateSpy, setTextFilterSpy, sortByDateSpy, sortByAmountSpy;

  beforeEach(() => {
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
                         filters={defaultFilters} 
                         setStartDate={setStartDateSpy}
                         setEndDate={setEndDateSpy}
                         setTextFilter={setTextFilterSpy}
                         sortByDate={sortByDateSpy}
                         sortByAmount={sortByAmountSpy}
                      />);
  });

  test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseListFilters with alt data', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle setTextFilter', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
      target: { value }
    });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
  });

  test('should handle sortByDate', () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(sortByDateSpy).toHaveBeenCalled();
  });

  test('should handle sortByAmount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(sortByAmountSpy).toHaveBeenCalled();
  });

  test('should handle date changes', () => {
    const dates = {
      startDate: moment().startOf('week'),
      endDate: moment().endOf('week')
    };
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(dates);
    expect(setStartDateSpy).toHaveBeenCalledWith(dates.startDate);
    expect(setEndDateSpy).toHaveBeenCalledWith(dates.endDate);
  });

  test('should handle onFocusChange', () => {
    const calendarFocused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  });

});