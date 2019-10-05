require('dotenv').config()

const{expect}=require('chai')
const register=require('.')
const{database,models:{User}}=require('axa-data')

const{env:{DB_URL_TEST}}=process

describe('logice - register user',()=>{
    before(()=>database.connect(DB_URL_TEST))

    let id, name, email, role

    beforeEach(async() => {
        id = `id-${Math.random()}`
        name = `name-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        role = `role-${Math.random()}`

        await User.deleteMany()
    })

    it('should succeed on correct data', async () => {
        const result=await register(id, name, email, role)
            expect(result).not.to.exist

            const user=await User.findOne({ email })  
            expect(user).to.exist
            expect(user.id).to.equal(id)
            expect(user.name).to.equal(name)
            expect(user.email).to.equal(email)
            expect(user.role).to.equal(role)

    })

    it('should fail if the mail already exists', async () => {
        try{
            await User.create({ id, name, email, role })

        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal(`user with e-mail ${email} already exists`)
        }})

        it('should fail on empty id', () =>
    expect(() =>
        register( '', name, email, role)
    ).to.throw('id is empty or blank')
    )
    it('should fail on undefined id', () =>
        expect(() =>
            register( undefined, name, email, role)
        ).to.throw(`id with value undefined is not a string`)
    )
    it('should fail on wrong id', () =>
    expect(() =>
        register( 124, name, email, role)
    ).to.throw(`id with value 124 is not a string`)
    )

    it('should fail on empty name', () =>
    expect(() =>
        register( id, '', email, role)
    ).to.throw('name is empty or blank')
    )
    it('should fail on undefined name', () =>
        expect(() =>
            register( id, undefined, email, role)
        ).to.throw(`name with value undefined is not a string`)
    )
    it('should fail on wrong name', () =>
    expect(() =>
        register( id, 124, email, role)
    ).to.throw(`name with value 124 is not a string`)
    )

    it('should fail on empty email', () =>
    expect(() =>
        register( id, name, '', role)
    ).to.throw('username is empty or blank')
    )
    it('should fail on undefined email', () =>
        expect(() =>
            register( id, name, undefined, role)
        ).to.throw(`username with value undefined is not a string`)
    )
    it('should fail on wrong email', () =>
    expect(() =>
        register( id, name, 124, role)
    ).to.throw(`username with value 124 is not a string`)
    )

    it('should fail on empty role', () =>
    expect(() =>
        register( id, name, email, '')
    ).to.throw('role is empty or blank')
    )
    it('should fail on undefined role', () =>
        expect(() =>
            register( id, name, email, undefined)
        ).to.throw(`role with value undefined is not a string`)
    )
    it('should fail on wrong role', () =>
    expect(() =>
        register( id, name, email, 124)
    ).to.throw(`role with value 124 is not a string`)
    )


})

