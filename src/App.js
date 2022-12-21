import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/welcome'/>
                </Route>
                <Route path='/welcome' exact>
                    <Welcome/>
                </Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;