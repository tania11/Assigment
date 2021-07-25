const UserSchema = require('../schemas/userSchema');
const fs = require("fs");


module.exports = {
    getUsers: function (req, res, next) {

      //mongoose
      // const users = await UserSchema.find();
        try {
            const jsonString = fs.readFileSync("users.json");
            var users = JSON.parse(jsonString);
        } catch (err) {
            console.log(err);
            return;
        }
	      res.send(users);
    },
    addUser: function (req, res) {
      //mongoose
      // const newUser = new UserSchema({
      //     ...req.body,
      //     id: users.length+1,
      // })
      const jsonString = fs.readFileSync("users.json");
      var users = JSON.parse(jsonString);
        const newUser = {
          ...req.body,
          id: users.length+1,
      }
      // await newUser.save();
      
      fs.writeFileSync('users.json', JSON.stringify([newUser, ...users]));
      res.status(200).json({message: "User added successfully"});
    },
    
}