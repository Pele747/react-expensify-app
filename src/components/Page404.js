import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = (props) => {
    console.log(props);
    
    return (
        <div>
            404 - <Link to='/'>Go Home</Link>
        </div>
    );
};

export default Page404;