// Higher Order Component (HOC) - A Component that renders other component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    );
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => {
       
        return (
            <div>
                { props.isAdmin && <p>This is private info. Please don't share</p> }
                <WrappedComponent {...props} />
            </div>
        );
    };
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
               { props.isAuthenticated ? <WrappedComponent {...props} /> : "Please login to see the info" } 
            </div> 
        )
    }
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is info" />, document.getElementById('app'));