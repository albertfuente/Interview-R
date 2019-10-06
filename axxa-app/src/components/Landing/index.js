import React from 'react'
import Context from '../Context'
import logic from '../../logic'

import './index.sass'


function Landing(){

    return <>
        <div className="landing-title">
        <h1 className="landing-textTitle">AXA Policies</h1>
        </div>
        <ul className="landing-links">
            <li><a href='/#/register' className="landing-link">Register</a></li>
            <li><a href='/#/login' className="landing-link">Login</a></li>

        </ul>
        <hr></hr>

    </>
}

export default Landing