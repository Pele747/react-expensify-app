import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => {
    return (
        <button onClick={startLogin}>Login</button>
    );
};

const mapDispatchToprops = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    };
}

export default connect(null, mapDispatchToprops)(LoginPage);