const express = require('express')
const app = express()
app.use(express.static('src'))
app.listen(process.env.PORT || 8081, () => console.log('diosito ayudame plis'))