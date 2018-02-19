const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
       case 'SET_TEXT_FILTER':
          return {
            ...state,
            text: action.text
          };
        case 'SORT_BY_AMOUNT': 
        case 'SORT_BY_DATE':
          return {
            ...state,
            sortBy: action.sortBy
          }; 
        case 'SET_START_DATE':
          return {
            ...state,
            startDate: action.startDate
          };
        case 'SET_END_DATE':
          return {
            ...state,
            endDate: action.endDate
          };     
        default:
          return state;
    }
  };

export default filtersReducer;