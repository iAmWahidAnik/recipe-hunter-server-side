const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('chef server is running')
});

app.get('/route', (req,res) => {
    res.send('this is route testing')
})

app.listen(port, () => {
    console.log(`chef server running on port ${port}`);
})