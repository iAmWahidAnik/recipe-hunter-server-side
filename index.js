const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const chefs = require('./data/chefData.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('chef server is running')
});

app.get('/chefs', (req,res) => {
    res.send(chefs)
});

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;

    const uniqueChef = chefs.find(chef => chef.chefId === id);
    res.send(uniqueChef)
})

app.listen(port, () => {
    console.log(`chef server running on port ${port}`);
})