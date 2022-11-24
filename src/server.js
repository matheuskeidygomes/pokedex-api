import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes.js';
import path from 'path';
dotenv.config();

const server = express();
const __dirname = path.resolve();

server.use(cors());
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.json());
server.use(routes);
server.use((req, res) => { res.status(404).send('Route not found!'); });
server.use((err, req, res, next) => {
   if (err) res.status(400).json({ error: err.message });
   else res.status(400).json({ error: 'Unexpected error! Please, try again.' });
});
server.listen(process.env.PORT);

export default server;





