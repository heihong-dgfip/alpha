module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? `/www/dsfr/${process.env.BRANCH_NAME}/vue/`
        : '/'
}