const express = require('express')
const app = express()
app.use(express.json())
const port = 3002

app.get('/', (req, res) => {
   
    res.status(200).json({
        message : "bienvenue sur le service update"
    });
})



app.put('/updtaeEtatDemande', (req, res) => {
    const demande_id = req.body.demande_id
    const personnel_id  = req.body.personnel_id
    const etate_demande = req.body.etate_demande
    console.log("payload : " , req.body)

    res.status(200).json({
        message : "updated successfully"
    });
})


app.put('/updateEtatRemboursement', (req, res) => {
    const remboursement_id = req.body.remboursement_id
    const personnel_id  = req.body.personnel_id
    const etate_remboursement = req.body.etate_remboursement
    console.log("hello : " , req.body)

    res.status(200).json({
        message : "updated successfully"
    });
})





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

JSON.stringify({
    "test" : "oumar"
})
