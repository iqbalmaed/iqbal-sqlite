// for endpoint 
const sqlite3  = require('sqlite3').verbose(); 
const db       = new sqlite3.Database('./src/contacts.db');
module.exports = db;