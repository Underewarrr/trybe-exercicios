import express from 'express';
import 'express-async-errors';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import router from './routers/router';

const app = express();

app.use(express.json());
app.use(router);

// Criar rotas aqui


app.use(httpErrorMiddleware);
export default app;