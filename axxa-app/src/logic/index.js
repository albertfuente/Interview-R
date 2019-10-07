import authenticateUser from './authenticate-user'
import isUserLoggedIn from './is-user-logged-in'
import retrieveUser from './retrieve-user'
import retrieveUserId from './retrieve-user-id'
import retrieveUserName from './retrieve-user-name'
import retrievePolicie from './retrieve-policie'
import retrievePolicieName from './retrieve-policie-user'
import registerUser from './register-user'
import registerPolicie from './register-policie'



export default{
    set __credentials__({id,token}){
        sessionStorage.id=id
        sessionStorage.token=token
    },
    get __credentials__(){
        const{id,token}=sessionStorage
        return{id,token}
    },
    authenticateUser,
    isUserLoggedIn,
    retrieveUser,
    retrieveUserId,
    retrieveUserName,
    retrievePolicie,
    retrievePolicieName,
    registerUser,
    registerPolicie
}

