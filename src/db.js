 // for basic crud
const sqlite3  = require('sqlite3').verbose();
const db       = new sqlite3.Database('./contacts.db');
module.exports = db;