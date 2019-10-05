require('dotenv').config() 
const { expect } = require('chai')
const retrieve=require('.')
const {database, models:{User} } = require('axa-data')

const{env: {DB_URL_TEST}}=process 

describe('logic - retrieve userId', () => {
    before(() => database.connect(DB_URL_TEST)) 

    let id, name, email, role, _id

    beforeEach(async() => {
        id = `id-${Math.random()}`
        name = `name-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        role = `role-${Math.random()}`

        await User.deleteMany()
        
        const user=await User.create({ id, name, email, role })
        
            _id = user._id.toString()
     
    })


    it('should succeed on correct data', async() =>{
        debugger
        const user=await retrieve(_id)
        
            expect(user).to.exist
            expect(user).to.equal(id)
    })

    
    it('should throw an error with a wrong id',async () =>{
        try{
            await retrieve("5d5fe532b4f3f827e6fc64f8")

        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal(`User with id 5d5fe532b4f3f827e6fc64f8 does not exist.`)

        }
    })

    it('should fail on empty id', () =>
    expect(() =>
        retrieve( "")
    ).to.throw('id is empty or blank')
    )
    it('should fail on undefined id', () =>
        expect(() =>
            retrieve( undefined)
        ).to.throw(`id with value undefined is not a string`)
    )
    it('should fail on wrong id', () =>
    expect(() =>
        retrieve( 123)
    ).to.throw(`id with value 123 is not a string`)
) 
    after(() => database.disconnect())
})