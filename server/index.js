const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
<<<<<<< HEAD

const app = express()

const PORT = config.get('port') || 8080 //get port from '/config/default.json'
const user = require('../models/user')
=======
const authRouter = require('./routes/auth.routes.js')
//
const app = express()

const PORT = config.get('port') || 8080 //get port from '/config/default.json'
//const user = require('./models/user')

app.use(express.json())
app.use('/api/auth',authRouter)
>>>>>>> 00620b19df43214b588c3027fb7c3ab2ecdf56f3

const start = async () => {
	try{
		await mongoose.connect(config.get('databaseURL'))
		app.listen(PORT,()=>{
			console.log(`Server is working on ${PORT}...`)
		})
	} catch (e) {

	}
}

start()