import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to='/' exact activeClassName="is-active">Dashboard</NavLink> <br/>
            <NavLink to='/expense' activeClassName="is-active">Create Expense</NavLink> <br/>
            <NavLink to='/help' activeClassName="is-active">Help</NavLink>
        </header>
    );
};

export default Header;