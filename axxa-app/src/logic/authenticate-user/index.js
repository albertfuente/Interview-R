import validate from '../../utils/validate'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (_id, email) {
    
    validate.string(_id, '_id')
    validate.string(email, 'email')
    validate.email(email, 'email')

    return (async () => {
        const response = await fetch(`${REACT_APP_API_URL}/auth`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({_id, email})
        })
        
        
        if (response.status !== 200) {
            const { error } = await response.json()
            throw Error(error)
        }
        else {
            const { id, token } = await response.json()
            
            this.__credentials__ = { id, token }
        }
        
    })()
}