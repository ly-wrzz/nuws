const isPro = Object.is(process.env.NODE_ENV, 'production')
module.exports = {
  baseUrl: isPro ? 'http://api.likunwei.com' : 'api/'
}