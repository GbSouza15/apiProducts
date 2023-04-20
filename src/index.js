const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routers/userRouter')

app.use(express.json())
app.use(cors())
app.use(router)


const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
    console.log(`Server is running or port ${PORT}`);
})