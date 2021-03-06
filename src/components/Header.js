import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to='/' exact activeClassName="is-active">Dashboard</NavLink> <br/>
            <NavLink to='/create' activeClassName="is-active">Create Expense</NavLink> <br/>
            {/* <NavLink to='/help' activeClassName="is-active">Help</NavLink> */}
            <button onClick={startLogout}>Logout</button>
        </header>
    );
};
 
const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    };
}

export default connect(null, mapDispatchToProps)(Header);