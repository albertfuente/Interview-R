import React, { useContext } from 'react'
import './index.sass'

function Feedback({ message }){
    return  <div> 
                <p className = "feedback__text">{message}</p>
            </div>
}
export default Feedback