import 'dotenv/config';
import app from './app.js';
import connectDB from './config/db.js';

connectDB()
      .then(
            () => {
                  app.on('error', (err) => {
                        throw new Error("Error: " + err.message);
                  })
                  console.log('MongoDB Connected...');
                  app.listen(process.env.PORT, () => {
                        console.log(`Server running on port ${process.env.PORT}`);
                  });
            }
      ).catch((err) => {
            console.error("Error connecting to MongoDB:", err.message);
            throw new Error('Error connecting to MongoDB', err.message);
      })