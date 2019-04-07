const setTextFilter = (text = '') => {
    return {
        type: "SET_TEXT_FILTER",
        text
    };
};
// SORT_BY_DATE
const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE',
    };
}
// SORT_BY_AMOUNT
const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT',
    }
}

// SET_START_DATE
const setStartDate = (startDate) => {
    return {
        type: "SET_START_DATE",
        startDate
    };
}
// SET_END_DATE
const setEndDate = (endDate) => {
    return {
        type: "SET_END_DATE",
        endDate
    };
}

export { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate  }