import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
     <p>404! Page Not Found. <Link to="/">Go Home</Link></p>
    </div>
);

export default PageNotFound;