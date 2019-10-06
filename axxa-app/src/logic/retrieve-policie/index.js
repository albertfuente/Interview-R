import validate from '../../utils/validate'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (clientName) {
    const { id, token } = this.__credentials__

    validate.string(clientName,'id')
    validate.string(token,'token')

    return (async () => {
        
        const response = await fetch(`${REACT_APP_API_URL}/retrieveList/${clientName}`, {
            method: 'GET',
            headers: { 'content-type': 'application/json','authorization': `bearer ${token}` }
        })

        if (response.status !== 201) {
            const { error } = await response.json()
            throw Error(error)
        }
        else {
            return await response.json()
        }
    })()
}