const express = require('express')
const app = express()
const PORT = 6060
const homeRoutes = require('./routes/home')
const takesRoutes = require('./routes/takes')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/takes', takesRoutes)





app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})