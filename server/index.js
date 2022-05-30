const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const authRouter = require('./routes/auth.routes.js')
const fileRouter = require('./routes/file.routes.js')

const app = express()
const PORT = process.env.PORT || config.get('port')
const cors = require('./middleware/cors.middleware')
const filePathMiddleware = require('./middleware/filepath.middleware')
const path = require('path')

app.use(fileUpload({}))
app.use(cors)
app.use(filePathMiddleware(path.resolve(__dirname,'files')))
app.use(express.static('static'))
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