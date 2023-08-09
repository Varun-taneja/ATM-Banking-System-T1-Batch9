import React from 'react';
import { Link } from 'react-router-dom';

const InvalidRoute = () => (
    <div className='invalid-route' style={{marginLeft: "2em"}}>
        <h1 style={{ color: "red", fontSize: 100 }}>404</h1>
        <h3>Oops this page does not exist!!</h3>
        <p>
            <Link to="/">Go Home</Link>
        </p>
    </div>
);

export default InvalidRoute;
