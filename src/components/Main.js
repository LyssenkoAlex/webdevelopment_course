import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ABOUT from '../components/About'
import TASKS from '../components/Tasks'

const Main = () => (
    <Switch>
        <Route exact path={'/'} component={ABOUT}/>
        <Route exact path={'/tasks'} component={TASKS}/>
    </Switch>
);

export default Main
