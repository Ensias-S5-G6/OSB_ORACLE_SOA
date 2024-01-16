const express = require('express')
const app = express()
const port = 3004

app.get('/', (req, res) => {
    const typeTaux = parseInt(req.query.numberTaux);
    
    let responseTaux = 1;

    switch (typeTaux) {
        case 0:
            responseTaux = 20;
            break;
        case 1:
            responseTaux = 30;
            break;
        case 2:
            responseTaux = 15;
            break;
        case 3:
            responseTaux = 20;
            break;
    }

    res.status(200).json({
        nombre_taux : responseTaux
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

JSON.stringify({
    "test" : "oumar"
})
