const {Schema, model, ObjectId} = require ('mongoose')

const User = new Schema ({
	email: {type: String, required:true,unique:true},
	password: {type: String, required: true},
	diskSpace: {type: Number, default:1024**3*10},
<<<<<<< HEAD
	usedSpace: {type: Number, default: 0},
=======
	used: {type: Number, default: 0},
>>>>>>> 00620b19df43214b588c3027fb7c3ab2ecdf56f3
	avatar: {type: String},
	files:[{type: ObjectId, ref:'File'}]
})

module.exports = model('User', User)