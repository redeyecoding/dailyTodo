
const tokenSecret = process.env.TOKEN_SECRET;

module.exports = {
    jwtConfig: { 
        secret: tokenSecret,
        getToken: req => req.body.token,
        algorithms: ['HS256'] }
};