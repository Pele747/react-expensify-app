import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    if(!props.expense) {
        props.history.push('/');
        return null;
    }
    return (
        <div>
           <ExpenseForm 
                expense={ props.expense }
                onSubmit={(expense) => {
                    // Dispatch the action to edit the expense
                    // Redirect to the dashboard
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />

        <button onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.expense.id }));
                props.history.push('/');
        }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    };
};

export default connect(mapStateToProps)(EditExpensePage);