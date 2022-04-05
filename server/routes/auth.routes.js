const Router = require('express')
const User = require('../models/user.js')
const router = new Router()

router.post('/registration', (req, res) => {
	try {
		const {email,password} = req.body
		const candidate = User.findOne({email})

		if(candidate) {
			res.status(400).json({message:'User with this email is already exists'})
		}

		const user = new User({email})

	} catch (e) {
		console.log(e)
		res.send({message: 'Server error'})
	}
})