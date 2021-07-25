const mongoose = require("mongoose")

const schema = mongoose.Schema({
	id: String,
  name: {
    type: String,
    required: [true, 'User name required']
    },
  username: {
    type: String,
    required: [true, 'Username required'],
    minlength:[5,'Minimun length 5 characters']
    },
  email: String,
  address: String,
  phone: {
    type: String,
    required: [true, 'Phone number required'],
    minlength:[10,'Minimun code length 5 characters']
  },
  website: String,
  company: String 
})

module.exports = mongoose.model("User", schema)