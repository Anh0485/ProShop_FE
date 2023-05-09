import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name:'Van Anh',
        email: 'anh@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name:'Vy',
        email: 'vy@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users