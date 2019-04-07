import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Page404 from '../components/Page404';


const AppRouter = () => {
    return (
        <BrowserRouter>

            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/' exact component={ExpenseDashboardPage}/> 
                    <Route path='/expense' component={AddExpensePage}/> 
                    <Route path='/edit/:id' component={EditExpensePage}/> 
                    <Route path='/help' component={HelpPage}/> 
                    <Route component={Page404}/>
                </Switch>
            </React.Fragment>
       
        </BrowserRouter>
    )
};

export default AppRouter;