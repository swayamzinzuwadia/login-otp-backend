import Sequelize from 'sequelize';


const seq = new Sequelize('auth_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
  // logging: false
});

// Test the connection

//Put database.js in Utils as well

(async () => {
  try {
    await seq.authenticate();
    console.log(' Database connected successfully.');
  } catch (error) {
    console.error(' Database connection failed:', error);
  }
})();

export default seq;