export default {
    port: process.env.port || 3001,
    dbUri: 'mongodb://localhost:27017/test',
    jwtSecret: 'F)J@NcRfTjWnZr4u7x!A%D*G-KaPdSgV',
    jwtLifetime: '30d',
    saltWorkFactor: 10
}