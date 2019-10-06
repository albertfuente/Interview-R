import React, { useContext,useState } from 'react'
import { Redirect, withRouter} from "react-router-dom"
import Context from '../Context'
import logic from '../../logic'
import Feedback from '../Feedback'

import './index.sass'



function Login(){
    const{setView,view}=useContext(Context)
    const[error,setError]=useState(undefined)


    function handleSubmit(event){
        event.preventDefault()
        const{target:{id:{value:id},email:{value:email}}}=event
        handleLogin(id,email)
    }

    async function handleLogin(id, email) {
        try {
            await logic.authenticateUser(id,email)  
            setView('client')
            
        } catch(error) {
            setError(error.message)
        }
    }


    return <>
        {view==="client" && <Redirect to="/client"/>}

        <div className="login-title">
        <h1 className="login-textTitle">Login</h1>
        </div>
        <div className="login-form">
            <form onSubmit={handleSubmit} className="login-data" >
            <label>User id:</label>
            <input type='text' name="id"></input>
            <label>Email:</label>
            <input type="email" name="email"></input>
            <button>Submit</button>

            </form>
            {error!=undefined && <Feedback message={error} />} 


            <a href='/#/' onClick="" className="backArrow"><i className="far fa-2x fa-arrow-alt-circle-left"></i></a>

            
        </div>



    </>
}

export default Login