const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('auth_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
})();

module.exports = sequelize ;
