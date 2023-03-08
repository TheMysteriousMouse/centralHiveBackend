const express = require('express');
const logger = require('./logs/logs');
const morganMiddleWare = require('./logs/morganMiddleWare');
const userRouter = require('./routes/userRoute');
const streamRouter = require('./routes/streamRoute');
const app = express();

app.use(morganMiddleWare);
app.use(express.json());

app.get('/', function (req, res) {
  const message = 'Hello, World!';
  res.render('index', { message: message });
});

app.use('/users', userRouter);
app.use('/streams', streamRouter);

const PORT = process.env.port || 3000;
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
