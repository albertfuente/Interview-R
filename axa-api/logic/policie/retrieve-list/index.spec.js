require('dotenv').config()

const{expect}=require('chai')
const retrieveList=require('.')
const{database,models:{User,Policie}}=require('axa-data')

const{env:{DB_URL_TEST}}=process

describe('logic- retrieve list',()=>{
    before(()=>database.connect(DB_URL_TEST))

    let id, name, email, role
    let idPolicie,amountInsured,emailPolicie,inceptionDate,installmentPayment,clientId

    beforeEach(async() => {
        id = `id-${Math.random()}`
        name = `name-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        role = `admin`

        idPolicie = `id-${Math.random()}`
        amountInsured = Math.random()
        emailPolicie = `email-${Math.random()}@domain.com`
        inceptionDate= new Date().toString()
        installmentPayment=true
        clientId=id
        

        await Policie.deleteMany()
    })

    it('should succed on correct data',async()=>{
        await User.create({ id, name, email, role })

        await Policie.create({id:idPolicie,amountInsured,email:emailPolicie,inceptionDate,installmentPayment,clientId})

        const policie=await retrieveList(name)
        
        expect(policie).to.exist
        expect(policie[0].amountInsured).to.equal(amountInsured)
        expect(policie[0].installmentPayment).to.equal(installmentPayment)
        expect(policie[0].clientId).to.equal(clientId) 
    })
    it('should fail if the User does not exist', async()=>{
        await User.deleteMany()

        try{
            await retrieveList(name)
        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal(`User does not exist`)
        }
    })

    it('should fail on empty name', () =>
    expect(() =>
    retrieveList('')
    ).to.throw('clientName is empty or blank')
    )
    it('should fail on undefined name', () =>
        expect(() =>
        retrieveList(undefined)

        ).to.throw(`clientName with value undefined is not a string`)
    )
    it('should fail on wrong name', () =>
    expect(() =>
    retrieveList(124)
    ).to.throw(`clientName with value 124 is not a string`)
    )

})