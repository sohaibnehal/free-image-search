import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';


const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
