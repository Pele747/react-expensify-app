import uuid from 'uuid';

// ADD EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
   ) => {
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    };
};

// REMOVE EXPNSE
const removeExpense = ({ id } = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    };
};

// EDIT EXPENSE
const editExpense = (id, updates) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    };
}

export { addExpense, removeExpense, editExpense }