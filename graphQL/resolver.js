// The users blueprint
const User = require('../model/User');
// Module for ecncrypting and decrypting
const bcrypt = require('bcryptjs');
// JWT for authentication
const jwt = require('jsonwebtoken');

module.exports = {
  Mutation: {
    async signupUser(__, { signupInput: { name, email, password } }) {
      try {
        // Checks if user exists
        const userAlreadyExists = await User.findOne({ email });

        // if so, return a message
        if (userAlreadyExists) {
          return new Error('A user is already registered with the email');
        }

        // encrypting the password with bcrypt
        let encryptedPassword = await bcrypt.hash(password, 10);

        // instantly creating the users, i would like to use
        // the save() method but this feels faster,
        // plus, this is a small project
        const user = await User.create({
          name,
          email: email,
          password: encryptedPassword
        });

        //create JWT for authentication logic
        const token = jwt.sign(
          {
            userId: user._id,
            email
          },
          // Protects my vulnerable data
          process.env.JWT_SECRET,
          { expiresIn: JWT_LIFETIME }
        );
        user.token = token;

        // the final model build, using the save() funtion, a little redundant
        // but somwhat worth it, given the fact that trying to beat a deadline
        user.save();
        return {
          id: user.id,
          ...user._doc
        };
      } catch (error) {
        console.log(error.message);
      }
    },
    async loginUser(__, { loginInput: { email, password } }) {
      try {
        //check if user exists
        const user = await User.findOne({ email });

        // if not return a message
        if (!user) {
          return new Error(
            "The email you have provided isn't registered with us"
          );
        }

        // Compare passwords with bcrypt to determine the authenticity of the password
        if (await bcrypt.compare(password, user.password)) {
          // Create a token for the user
          const token = jwt.sign(
            {
              userId: user._id,
              email
            },
            // Still protecting my vulnerable data
            process.env.JWT_SECRET,
            { expiresIn: JWT_LIFETIME }
          );
          user.token = token;
          return {
            id: user.id,
            ...user._doc
          };
        } else {
          return new Error('Incorrect password, please try again');
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  },
  Query: {
    // for getting the/a user
    user: (__, { ID }) => User.findById(ID)
  }
};
