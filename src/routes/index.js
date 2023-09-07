

const siteRouter = require('./site')
const gameRouter = require('./game')    
const linksRouter = require('./links')
const modRouter = require('./mod')

function route (app) {

    app.use('/game', gameRouter)
    app.use('/', siteRouter)
    app.use('/links', linksRouter)
    app.use('/mods', modRouter)
}
module.exports = route;