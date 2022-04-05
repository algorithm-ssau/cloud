const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes.js')
//
const app = express()

const PORT = config.get('port') || 8080 //get port from '/config/default.json'
// const user = require('../models/user')

app.use(express.json())
app.use('/api/auth',authRouter)

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