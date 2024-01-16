const express = require('express')
const moment = require('moment');
const app = express()
app.use(express.json())
const mysql = require('mysql2');
const port = 3003

// Configurer la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'SOA_DB'
  });

app.get('/', (req, res) => {
   
    res.status(200).json({
        message : "bienvenue sur le service Load"
    });
})



app.get('/chargerMissionActuelle', (req, res) => {

    console.log(req.query)

    const personnel_id  = parseInt(req.query.personnel_id)
    const selectQuery = `SELECT id, date_depart, date_arrivee, charges_mission, reasons, etat_mission, personnel_id FROM MISSION WHERE personnel_id = ? AND etat_mission = ? LIMIT 1;`
    connection.query(selectQuery , [personnel_id , 0] ,   (error, results) => {
        if (error) {
            console.error('Erreur lors de l\'exécution de la requête SQL:', error);
            res.status(500).json({ error: 'Erreur de la base de données' });
        }else{
            console.log("result : " , results)
            res.status(200).json({
                date_depart : moment(results[0].date_depart).format('YYYY-MM-DD'), 
                date_arrivee : moment(results[0].date_arrivee).format('YYYY-MM-DD') , 
                reasons : results[0] .reasons
            });
        }
    });
})


app.get('/chargerMissionNonRemboursee', (req, res) => {
    console.log(req.query)
    const personnel_id  = parseInt(req.query.personnel_id)
    const selectQuery = `SELECT id, etat, charges_initale, personnel_id, mission_id FROM REMBOURSEMENT WHERE personnel_id = ? AND etat = ? ;`
    connection.query(selectQuery , [personnel_id , 0] ,   (error, results) => {
        if (error) {
            console.error('Erreur lors de l\'exécution de la requête SQL:', error);
            res.status(500).json({ error: 'Erreur de la base de données' });
        }else{
            console.log("result : " , results)
            const outPut = []
            for(let result of results){
                console.log(result)
                outPut.push({
                    charges_initale : result.charges_initale, 
                    mission_id : result.mission_id , 
                    id : result.id
                }) 
            }
            res.status(200).json({
                data : outPut
            });
        }
    });
})



app.get('/chargerDemandeRemboursement', (req, res) => {
    console.log(req.query)
    const remboursement_id = parseInt(req.query.remboursement_id)
    const personnel_id  = parseInt(req.query.personnel_id)

    const selectQuery = `SELECT id, etat, charges_initale, personnel_id, mission_id FROM REMBOURSEMENT WHERE personnel_id = ? AND id = ? LIMIT 1;`
    connection.query(selectQuery , [personnel_id , remboursement_id] ,   (error, results) => {
        if (error) {
            console.error('Erreur lors de l\'exécution de la requête SQL:', error);
            res.status(500).json({ error: 'Erreur de la base de données' });
        }else{
            console.log("result : " , results)
            res.status(200).json({
                charges_initale : results[0].charges_initale, 
                mission_id : results[0].mission_id , 
                id : results[0].id
            });
        }
    });


})






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

JSON.stringify({
    "test" : "oumar"
})
