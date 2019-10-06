
import React, { useState } from 'react'

import Context from '../Context'
import Landing from '../Landing'
import Register from '../Register'
import Login from '../Login'
import Client from '../ClientPanel'


import { withRouter, Route } from 'react-router-dom'

import './index.sass'
 
function App() {

  const [view, setView] = useState('')
  const[user,setUser]=useState()
  const[admin,setAdmin]=useState()



  return(
  <div className="App">
    <Context.Provider value={{view, setView, user,setUser, admin,setAdmin }} >

    <Route exact path="/" render={() => <Landing /> } />
    <Route path="/register" render={() => <Register /> } />
    <Route path="/login" render={() => <Login /> } />
    <Route path="/client" render={() => <Client /> } />


    </Context.Provider>
    </div>)
}

export default withRouter(App);