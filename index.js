const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./src/routers/userRouter')
const rateLimit = require('express-rate-limit')

app.use(express.json())
app.use(cors())

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 8,
    message: { error: 'Too many requests from this IP, please try again later'}
})

app.use(limiter)
app.use(router)




const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
    console.log(`Server is running or port ${PORT}`);
})