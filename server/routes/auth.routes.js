const Router = require("express");
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const config = require("config")
const {check, validationResult} = require("express-validator")
const router = new Router()
const jwt = require('jsonwebtoken')


router.post('/registration',
	[
		check('email', "Uncorrect email").isEmail(),
		check('password', 'Password must be longer than 3 and shorter than 12').isLength({min: 3, max: 12})
	],
	async (req, res) => {
		try {
			console.log(req.body)
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({message: "Uncorrect request", errors})
			}

			const {email, password} = req.body;

			const candidate = await User.findOne({email})

			if (candidate) {
				return res.status(400).json({message: `User with email ${email} already exists`})
			}
			const hashPassword = await bcrypt.hash(password, 15)
			const user = new User({email, password: hashPassword})
			await user.save()
			return res.json({message: "User was created"})

		} catch (e) {
			console.log(e)
			res.send({message: "Server error"})
		}
	})

router.post('/login', async (req, res) => {
	try {
		const {email,password} = req.body
		const user = await User.findOne({email})

		if(!user){
			return res.status('404').json({message:'User not found.'})
		}

		const isPasswordRight = bcrypt.compareSync(password,user.password)
		if(!isPasswordRight){
			return res.status('400').json({message:'Password is wrong.'})
		}

		const token = jwt.sign({id:user.id},config.get('secretKey'),{expiresIn:'1h'})
		return res.json(
			{
				token,
				user:{
					id: user.id,
					email: user.email,
					diskSpace: user.diskSpace,
					usedSpace: user.usedSpace,
					avatar: user.avatar
				}
			}
		)
	} catch (e) {
		console.log(e)
		res.send({message: "Server error"})
	}
})


module.exports = router