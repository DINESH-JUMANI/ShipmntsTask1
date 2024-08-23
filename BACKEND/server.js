const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddleware');
const fileUploadRoutes = require('./routes/fileUploadRoutes');
const cors = require('cors')

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors())

app.use('/api', fileUploadRoutes);
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
