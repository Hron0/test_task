import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const User = new Schema({
    name: { type: String, required: true},
    passwrod: { type: String, required: true}
  }, 
  { collection: "user-data"}
  );


const UserModel = mongoose.model('User-data', User);

export default UserModel