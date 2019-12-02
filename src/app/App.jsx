import React from 'react';
import './App.css';
import { AccountEditor } from './AccountEditor'; 
import { AccountsDashboard } from './AccountsDashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import { Madlibs } from './Madlibs';

function App() {
    return <>
      <Router>
        <Switch>
            <Route  path="/new" component={ AccountEditor } /> 
            <Route  path="/edit/:accountId" component={ AccountEditor } /> 
            <Route path="/madlibs" component={Madlibs} />
            <Route path="/" component={AccountsDashboard} /> 
            
        </Switch>
      </Router>
    </>;
  }
  export default App;


  