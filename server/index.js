const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes.js')
const fileRouter = require('./routes/file.routes.js')

const app = express()
const PORT = config.get('port') || 8080
const cors = require('./middleware/cors.middleware')

app.use(cors)
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/files',fileRouter)


const start = async () => {
	try{
		await mongoose.connect(config.get('databaseURL'))
		app.listen(PORT,()=>{
			console.log(`Server is working on ${PORT}...`)
		})
	} catch (e) {
		console.log(`Server is not started + ${e.message}`)
	}
}

start()