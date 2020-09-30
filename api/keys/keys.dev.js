const password = require('./db.password')
module.exports = {
  MONGO_URI: `mongodb+srv://vlad:${password}@cluster0.kzyli.mongodb.net/<dbname>?retryWrites=true&w=majority`,
  JWT: 'dev-jwt-key',
}
