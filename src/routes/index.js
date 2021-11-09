import { BrowserRouter, Switch } from 'react-router-dom';

import PrivateRoute from './route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={Login} />
                <PrivateRoute isPrivate exact path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;