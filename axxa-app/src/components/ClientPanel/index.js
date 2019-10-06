import React, { useContext,useState, useEffect } from 'react'
import Context from '../Context'
import logic from '../../logic'
import './index.sass'



function Client(){
    const[userId,setUserId]=useState()
    const[userName,setUserName]=useState()
    const[policieRetrieveList,setPoliceRetrieveList]=useState()
    const[policieRetrieveName,setPoliceRetrieveName]=useState()

    const {  view, setView, user, setUser, admin,setAdmin } = useContext(Context)

    useEffect(() => {

        if (logic.isUserLoggedIn()) {
          async function retrieve() {
            try {
              const { user: userRetrieved } = await logic.retrieveUser()
              setUser(userRetrieved) 
              //setAdmin(userRetrieved.isAdmin)  
            } catch(error) {
              console.log(error.message)          
            }
          }
          retrieve()

        }
    })

    function handleRetrieveId(){
        async function retrieve(){
            
        try{
            const res=await logic.retrieveUserId()
            setUserId(res.userId)

        }catch(error){
            console.log(error.message)
        }

        }
        retrieve()       
    }

    function handleRetrieveNameUser(){
        async function retrieve(){
            
            
        try{
            const res2=await logic.retrieveUserName()
            setUserName(res2.userName)

        }catch(error){
            console.log(error.message)
        }

        }
        retrieve()      
    }

    function handleRetrieveList(){
        async function retrieve(){
            
        try{
            const res1=await logic.retrieveUserName()
            const res=await logic.retrievePolicie(res1.userName)
            setPoliceRetrieveList(res.policieId)

        }catch(error){
            console.log(error.message)
        }

        }
        retrieve()      
    }

    function handleRetrieveName(event){
        event.preventDefault()
        const{target:{id:{value:id}}}=event
        handleRetrive(id)
    }

    async function handleRetrive(id){
            try{
                const res=await logic.retrievePolicieName(id)
                setPoliceRetrieveName(res.user)
    
            }catch(error){
                console.log(error.message)
            }
    }


    return <>
        <div className="login-title">
        <h1 className="login-textTitle">Client Panel</h1>
 
        </div>
        {user && 
        <div className="client-main">
            <h2>Welcome {user.name}</h2>

            <p>Retrieve user id:</p>
            <button onClick={handleRetrieveId}>Push to get the user id:</button>
            {userId && <p>This is the user id: {userId}</p>}

            <hr></hr>

            <p>Retrieve user name:</p>
            <button onClick={handleRetrieveNameUser}>Push to get the user name:</button>
            {userName && <p>This is the user name: {userName}</p>}

            <hr></hr>
            <h3>With admin rights you can:</h3>

            <p>Retrieve admin polices:</p>
            <button onClick={handleRetrieveList}>Push to get the user policies:</button>
            {policieRetrieveList &&
            policieRetrieveList.map(item=>{
                return<>
                <ul>
                    <li>Amount insured: {item.amountInsured}</li>
                    <li>ClientId: {item.clientId}</li>
                    <li>Email: {item.email}</li>
                    <li>Id: {item.id}</li>
                    <li>Inception Date: {item.inceptionDate}</li>
                    <li>Installment Payment: {item.installmentPayment.toString()}</li>

                </ul>

                </>
            })
            }
            <hr></hr>


            <p>Retrieve user from a police:</p>
            <form className="login-data" onSubmit={handleRetrieveName}>
            <label>Policie id:</label>
            <input type='text' name="id"></input>
            <button>Submit</button>

            </form>
            {policieRetrieveName && <p>The user name of this policie is: {policieRetrieveName}</p>}
            
            <hr></hr>
            
            



            </div>}
       
       
       
        {!user &&
        <>
        <h3>Please log in in order to enter the client panel</h3>
        <a href='/#/' onClick="" className="backArrow"><i className="far fa-2x fa-arrow-alt-circle-left"></i></a>
        </>}




    </>
}

export default Client