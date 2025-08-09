import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes whitespaces
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Converts email to lowercase
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

export default User;