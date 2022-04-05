const Router = require('express')
const User = require('../models/user.js')
const bcrypt = require('bcryptjs')
const router = new Router()

router.post('/registration', async (req, res) => {
	try {
		const {email,password} = req.body
		const candidate = User.findOne({email})

		if(candidate) {
			res.status(400).json({message:'User with this email is already exists'})
		}

		const hashPassword = await bcrypt(password, 15)
		const user = new User({email,password: hashPassword})
		await user.save()
		return res.send({message:'User was succesfully created '})
	} catch (e) {
		console.log(e)
		res.send({message: 'Server error'})
	}
})