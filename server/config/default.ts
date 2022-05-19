export default {
    port: process.env.PORT || 3321,
    dbUri: 'mongodb+srv://AkylverenTS:1q2w3e4r5@cluster0.hirhq.mongodb.net/?retryWrites=true&w=majority',
    jwtSecret: 'F)J@NcRfTjWnZr4u7x!A%D*G-KaPdSgV',
    jwtLifetime: '30d',
    saltWorkFactor: 10
}