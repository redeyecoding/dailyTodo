
const tokenSecret = process.env.TOKEN_SECRET;

module.exports = {
    jwtConfig: { secret: tokenSecret, algorithms: ['HS256'] }
};