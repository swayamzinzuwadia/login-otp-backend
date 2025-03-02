const express = require('express');
const sequelize  = require('./models/database');
const authRoutes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

(async () => {
  try {
    await sequelize.sync();
    app.listen(3000, () => console.log('Server running on port 3000'));
  } catch (error) {
    console.error('Database sync failed', error);
  }
})();