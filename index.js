const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/users.js');
const productsRouter = require('./routes/products.js');
const authRouter = require('./routes/auth.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); 
app.use(cors());

app.use(`/api/users`, userRouter);
app.use(`/api/products`, productsRouter);
app.use(`/api/auth`, authRouter);

app.listen(port, () => {
    console.log(`SERVIDOR ARRIBA EN PUERTO ${port}`);
});