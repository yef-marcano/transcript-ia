const express = require('express');
const app = express()

const apifunctions = require('./test.js');
const cors = require('cors')
const path = require('path');

app.use(cors());

app.use(express.json())

app.get('/api/transcriptions/:id', async (req, res) => {
    let result = await apifunctions.helperFunction(req.params.id)
    res.send(result);

});

app.post('/api/transcriptions', async (req, res) => {
    let url = req.body.url
    const result = await apifunctions.postingHelperFunction(url)
    res.send(result)
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listing on port ${port}...`));