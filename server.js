const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 6060
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const takesRoutes = require('./routes/takes')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)


connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))


//Sessions
app.use(
    new session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  

app.use('/', homeRoutes)
app.use('/takes', takesRoutes)





app.listen(process.env.PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})