const express = require('express');
const userRouter = require('./routes/userRoute')
const streamRouter = require('./routes/streamRoute')
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.use('/users', userRouter)
app.use('/streams', streamRouter)

const PORT = process.env.port || 3000;
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
