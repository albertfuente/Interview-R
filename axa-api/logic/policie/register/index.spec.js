require('dotenv').config()

const{expect}=require('chai')
const register=require('.')
const{database,models:{User,Policie}}=require('axa-data')

const{env:{DB_URL_TEST}}=process

describe('logic- register policie',()=>{
    before(()=>database.connect(DB_URL_TEST))

    let id, name, email, role
    let idPolicie,amountInsured,emailPolicie,inceptionDate,installmentPayment,clientId

    beforeEach(async() => {
        id = `id-${Math.random()}`
        name = `name-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        role = `role-${Math.random()}`

        idPolicie = `id-${Math.random()}`
        amountInsured = Math.random()
        emailPolicie = `email-${Math.random()}@domain.com`
        inceptionDate= new Date().toString()
        installmentPayment=true
        clientId=id
        debugger

        await Policie.deleteMany()
    })

    it('should succed on correct data',async()=>{
        const res=await register(idPolicie,amountInsured,emailPolicie,inceptionDate,installmentPayment,clientId)
        const policie=await Policie.findOne({id:idPolicie})
        expect(policie).to.exist
        expect(policie.amountInsured).to.equal(amountInsured)
        expect(policie.installmentPayment).to.equal(installmentPayment)
        expect(policie.clientId).to.equal(clientId)
    })

    it('should fail if the idPolice already exists', async()=>{

        try{
            await Policie.create({id:idPolicie,amountInsured,email:emailPolicie,inceptionDate,installmentPayment,clientId})
        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal(`policie with id ${idPolicie} already exsits`)
        }
    })

    it('should fail on empty id', () =>
    expect(() =>
        register( '',amountInsured,emailPolicie,inceptionDate,installmentPayment,clientId)
    ).to.throw('id is empty or blank')
    )
    it('should fail on undefined id', () =>
        expect(() =>
            register( undefined,amountInsured,emailPolicie,inceptionDate,installmentPayment,clientId)
        ).to.throw(`id with value undefined is not a string`)
    )
    it('should fail on wrong id', () =>
    expect(() =>
        register( 124,amountInsured,emailPolicie,inceptionDate,installmentPayment,clientId)
    ).to.throw(`id with value 124 is not a string`)
    )


    it('should fail on empty amountInsured', () =>
    expect(() =>
        register( idPolicie,'',emailPolicie,inceptionDate,installmentPayment,clientId)
    ).to.throw('amountInsured with value  is not a number')
    )
    it('should fail on undefined amountInsured', () =>
        expect(() =>
            register( idPolicie,undefined,emailPolicie,inceptionDate,installmentPayment,clientId)
        ).to.throw(`amountInsured with value undefined is not a number`)
    )
    it('should fail on wrong amountInsured', () =>
    expect(() =>
        register( idPolicie,"124",emailPolicie,inceptionDate,installmentPayment,clientId)
    ).to.throw(`amountInsured with value 124 is not a number`)
    )


    it('should fail on empty installmentPayment', () =>
    expect(() =>
        register( clientId,amountInsured,emailPolicie,inceptionDate,'',clientId)
    ).to.throw('installmentPayment with value  is not a boolean')
    )
    it('should fail on undefined installmentPayment', () =>
        expect(() =>
            register( clientId,amountInsured,emailPolicie,inceptionDate,undefined,clientId)
        ).to.throw(`installmentPayment with value undefined is not a boolean`)
    )
    it('should fail on wrong installmentPayment', () =>
    expect(() =>
        register( clientId,amountInsured,emailPolicie,inceptionDate,124,clientId)
    ).to.throw(`installmentPayment with value 124 is not a boolean`)
    )

    


})