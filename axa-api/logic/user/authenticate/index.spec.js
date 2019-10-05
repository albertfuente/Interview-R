require('dotenv').config() 
const { expect } = require('chai')
const authenticate=require('.')
const { database,models:{User} } = require('axa-data')

const{env: {DB_URL_TEST}}=process 

describe('logic - authenticate user', () => {
    before(() => database.connect(DB_URL_TEST)) 

    let id, name, email, role

    beforeEach(async() => {
        id = `id-${Math.random()}`
        name = `name-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        role = `role-${Math.random()}`

        await User.deleteMany()

        const user=await User.create({ id, name, email, role })
            _id = user.id
    })


    it('should succeed on correct data',async () =>{
        const _id=await authenticate(id, email)
        .then(_id => {
            expect(_id).to.exist
            expect(_id).to.be.a('string')
            expect(_id).to.equal(_id)
        })
       
    })
    it('should fail on incorrect mail',async () => {
        try{
            await authenticate(id,"pepito@mail.com")

        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal('Wrong credentials.')
        }
    }

    )


    it('should fail on empty id', () =>
    expect(() =>
        authenticate( '',email)
    ).to.throw('id is empty or blank')
    )
    it('should fail on undefined id', () =>
        expect(() =>
            authenticate( undefined,email)
        ).to.throw(`id with value undefined is not a string`)
    )

    it('should fail on empty email', () =>
    expect(() =>
        authenticate( id,'')
    ).to.throw('username is empty or blank')
    )
    it('should fail on undefined email', () =>
        expect(() =>
            authenticate( id,undefined)
        ).to.throw(`username with value undefined is not a string`)
    )
 

    after(() => database.disconnect())
})