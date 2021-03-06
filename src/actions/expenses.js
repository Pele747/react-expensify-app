import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD EXPENSE
const addExpense = (expense) => {
    return {
        type: "ADD_EXPENSE",
        expense
    };
};

const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0      
        } = expenseData;

        
        const expense = { description, note, amount, createdAt };
        database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });

    };
};

// REMOVE EXPNSE
const removeExpense = (id) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    };
};

const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref('users/' + uid + '/expenses/' + id).remove().then(() => {
            dispatch(removeExpense(id));
        }) ;   
    };
}

// EDIT EXPENSE
const editExpense = (id, updates) => {
    return {
        type: "EDIT_EXPENSE",
        id,
        updates
    };
}

const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref('users/' + uid + '/expenses/'+id).update({ ...updates }).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
}

const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    };
}

const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
       return database.ref('users/' + uid + '/expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((child) => {
                expenses.push({
                    id: child.key,
                    ...child.val()
                });
            });

            dispatch(setExpenses(expenses));
       });
    };
}



export { addExpense, removeExpense, editExpense, setExpenses, startRemoveExpense, startAddExpense, startSetExpenses, startEditExpense }