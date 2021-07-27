require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    host: 'tuffi.db.elephantsql.com',
    username: 'psycchnm',
    password: 'UbVT6PwV-jxEJgFuPn-7BNwI8j2YmQnc',
    database: 'psycchnm',
    define: {
        timestamps: true,
        underscored: true
    }
}