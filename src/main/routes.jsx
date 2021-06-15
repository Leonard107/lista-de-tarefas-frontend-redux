import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Pendencia from '../pendencia/pendencia'
import About from '../about/about'

export default props => (
<Router history={hashHistory}>
    <Route path='/pendencias' component={Pendencia} />
    <Route path='/about' component={About} />
    <Redirect from='*' to='/pendencias' />
</Router>
)