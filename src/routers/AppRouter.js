import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Page404 from '../components/Page404';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => {
    return (
        <Router history={history}>

            <React.Fragment>
                <Switch>
                    <Route path='/' exact component={LoginPage}/> 
                    <PrivateRoute path='/dashboard' exact component={ExpenseDashboardPage}/> 
                    <PrivateRoute path='/create' component={AddExpensePage}/> 
                    <PrivateRoute path='/edit/:id' component={EditExpensePage}/> 
                    <Route path='/help' component={HelpPage}/> 
                    <Route component={Page404}/>
                </Switch>
            </React.Fragment>
       
        </Router>
    );
};

export default AppRouter;