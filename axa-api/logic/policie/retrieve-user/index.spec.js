require('dotenv').config()

const{expect}=require('chai')
const retrievePolicieUser=require('.')
const{database,models:{User,Policie}}=require('axa-data')

const{env:{DB_URL_TEST}}=process

describe('logic- retrieve user from policie',()=>{
    before(()=>database.connect(DB_URL_TEST))

    let id, name, email, role
    let idPolicie,amountInsured,emailPolicie,inceptionDate,installmentPayment,clientId
    let policieId

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

        const result=await Policie.create({id:idPolicie,amountInsured,email:emailPolicie,inceptionDate,installmentPayment,clientId})

        policieId=result.id
        const policie=await retrievePolicieUser(policieId)
        
        expect(policie).to.exist
        expect(policie).to.equal(name)
       
    })
     it('should fail if the User does not exist', async()=>{
        await User.deleteMany()

        try{
            await retrievePolicieUser(policieId)
        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal('Policie does not exist')
        }
    }) 

    it('should fail on empty id', () =>
    expect(() =>
    retrievePolicieUser('')
    ).to.throw('id is empty or blank')
    )
    it('should fail on undefined id', () =>
        expect(() =>
        retrievePolicieUser(undefined)

        ).to.throw(`id with value undefined is not a string`)
    )
    it('should fail on wrong id', () =>
    expect(() =>
    retrievePolicieUser(124)
    ).to.throw(`id with value 124 is not a string`)
    )

})