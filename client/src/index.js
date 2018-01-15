import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/App';
import Landing from './components/Landing';
import registerServiceWorker from './registerServiceWorker';


const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/search' component={App}/>
            </Switch>
        </BrowserRouter>
    )
};


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
