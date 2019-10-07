import validate from '../../utils/validate'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (id,amountInsured,email,inceptionDate,installmentPayment,clientId) {

     validate.string(id,'id')
     validate.number(amountInsured,'amountInsured')
     validate.string(email,'email')
     validate.email(email,'email')
     validate.string(inceptionDate,'inceptionDate')
     validate.boolean(installmentPayment,'installmentPayment')
     validate.string(clientId,'clientId')

    return (async () => {
        const response = await fetch(
            `${REACT_APP_API_URL}/users`, { 
                method: 'POST', 
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ id,amountInsured,email,inceptionDate,installmentPayment,clientId})
            })
        
        if (response.status !== 201) {
            const { error } = await response.json()
            throw Error(error)
        }
    })()
}