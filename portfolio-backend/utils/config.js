require("dotenv").config();

let PORT = process.env.PORT || 3001;
let MONGODB_URI = 'mongodb+srv://portfolio:Portfolio1@cluster0-seona.mongodb.net/portfolios?retryWrites=true&w=majority' //process.env.MONGODB_URI;
let SECRET = process.env.SECRET;

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET
};
