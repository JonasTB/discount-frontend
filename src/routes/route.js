import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Context } from '../hooks/authProvider';

const PrivateRoute = ({ isPrivate, ...rest }) => {
    const { loading, authenticated } = useContext(Context);

    if (loading)
        return <h1>Loading...</h1>


    return <Route {...rest}>
        {(isPrivate && !authenticated) ?
            <Redirect to='/' /> : null}
    </Route>
}

export default PrivateRoute;