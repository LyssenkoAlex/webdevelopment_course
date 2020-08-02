import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ABOUT from '../components/About'

const Main = () => (
    <Switch>
        <Route exact path={'/'} component={ABOUT}/>
    </Switch>
);

export default Main
