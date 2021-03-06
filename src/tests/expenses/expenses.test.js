import  expensesReducer  from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([ expenses[0], expenses[2] ]);

});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ]);

});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'some desc',
            note: '',
            createdAt: 20000,
            amount: 29500
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, action.expense]);
});

test('should edit the expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
           amount: 122000
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[1].amount).toBe(122000);
});

test('should not edit the expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '125123',
        updates: {
           amount: 122000
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});