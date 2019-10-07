import validate from '../../utils/validate'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (id, name, email, role) {

    // Input validation
    validate.string(id, 'id')
    validate.string(name, 'name')
    validate.string(email, 'email')
    validate.email(email, 'email')
    validate.string(role, 'role')

    return (async () => {
        const response = await fetch(
            `${REACT_APP_API_URL}/users`, { 
                method: 'POST', 
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ id, name, email, role})
            })
        
        if (response.status !== 201) {
            const { error } = await response.json()
            throw Error(error)
        }
    })()
}