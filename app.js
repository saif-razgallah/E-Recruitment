const express = require ('express')
const path = require('path')

const session = require('express-session')
const SessionStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')

const acceuilRouter = require('./routes/acceuil.route')
const homeRouter = require('./routes/home.route')
const authRouter = require('./routes/auth.route')
const adminRouter = require('./routes/admin.route')
const candidatureRouter = require('./routes/candidature.route')


const app = express() // pour faire l'application ou le serveur

app.use(express.static(path.join(__dirname,'assets'))) // static files
app.use(express.static(path.join(__dirname,'images'))) // static files
app.use(flash())

const STORE = new SessionStore({
    uri : 'mongodb://localhost:27017/e-recrutement', //link DataBase
    collection: 'sessions'
})

app.use(session({
    secret: 'this is my secret secret  to hash express session .....',
    saveUninitialized: false, //
    // cookie:{
    //     maxAge: 1*60*60*100 // hour
    // },
    store :STORE
}))
app.set('view engine','ejs')
app.set('views','views') //default

app.use('/',acceuilRouter)
app.use('/annonces',homeRouter)
app.use('/',authRouter)
app.use('/admin',adminRouter)
app.use('/candidature',candidatureRouter)




const port = process.env.PORT || 4000

app.listen(port,(err)=>{
    //console.log(err)
    console.log('server is running')
})