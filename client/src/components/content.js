import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TenantsContainer from '../containers/tenantsContainer';

const Content = () => (
    <div id="content">
        <Switch>
            <Route exact path='/' component={undefined} />
            <Route path='/tenants' component={TenantsContainer} />
        </Switch>
    </div>
);

export default Content;