
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'
/* 
应用跟组件
*/
export default class App extends React.Component {

    render() {
      return (
        <BrowserRouter> 
        <Switch>
        
        <Route path='/login' component={Login}/>    
        <Route path='/' component={Admin}/>      
        </Switch>
      </BrowserRouter>
    )
  }
}



