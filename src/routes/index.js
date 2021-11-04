import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashbboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;