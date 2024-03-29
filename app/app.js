import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import apiRoutes from './routes/api.js';

const app = express();
const PORT = 3000;

app.use(json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
