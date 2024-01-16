const express = require('express')
const mysql = require('mysql2');
const moment = require('moment');
const app = express()
app.use(express.json())
const port = 3001


// Configurer la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'SOA_DB'
  });


// Établir la connexion à la base de données
connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données:', err);
    } else {
      console.log('Connexion à la base de données MySQL réussie');
    }
  });
 


app.get('/', (req, res) => {
   
    res.status(200).json({
        message : "bienvenue sur le service insert"
    });
})

app.post('/insertDemandeMission', (req, res) => {
    console.log(req.body)
    const raison = req.body.raison
    const personnel_id  = parseInt(req.body.personnel_id)
    const result_id = 0
    const insertQuery = `INSERT INTO DEMANDE(etat_demande, raison_demande, personnel_id) VALUES (?,?, ?)`
    const selectQuery = `SELECT id, etat_demande, raison_demande, personnel_id FROM DEMANDE ORDER BY id DESC LIMIT 1`
    connection.query(insertQuery,[0 , raison , personnel_id ] ,  (error, results) => {
        if (error) {
          console.error('Erreur lors de l\'exécution de la requête SQL:', error);
          res.status(500).json({ error: 'Erreur de la base de données' });
        }
        else{
            connection.query(selectQuery ,  (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête SQL:', error);
                    res.status(500).json({ error: 'Erreur de la base de données' });
                }else{
                    console.log("result : " , results)
                    res.status(200).json({
                        demande_id : results[0].id
                    });
                }
            });
        }
    });
})

app.post('/insertMission', (req, res) => {
    const raison_mission = req.body.raison_mission
    const personnel_id  = req.body.personnel_id
    const date_depart = moment(req.body.date_depart).format('YYYY-MM-DD'); 
    const insertQuery = `INSERT INTO MISSION(date_depart, reasons , etat_mission, personnel_id) VALUES (? , ? , ?  , ?)`
    const selectQuery = `SELECT id , date_depart, date_arrivee, charges_mission, reasons, etat_mission, personnel_id FROM MISSION ORDER BY id DESC LIMIT 1`
    connection.query(insertQuery,[ date_depart , raison_mission , 0 , personnel_id ] ,  (error, results) => {
        if (error) {
          console.error('Erreur lors de l\'exécution de la requête SQL:', error);
          res.status(500).json({ error: 'Erreur de la base de données' });
        }
        else{
            connection.query(selectQuery ,  (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête SQL:', error);
                    res.status(500).json({ error: 'Erreur de la base de données' });
                }else{
                    console.log("result : " , results)
                    res.status(200).json({
                        mission_id : results[0].id
                    });
                }
            });
        }
    });
})


app.post('/InsertDemandeRetour', (req, res) => {
    const mission_id = req.body.mission_id
    const personnel_id  = req.body.personnel_id
    const insertQuery = `INSERT INTO DEMANDE_RETOUR (etat_demande, personnel_id, mission_id) VALUES (? , ?  , ? )`
    const selectQuery = `SELECT id , etat_demande, personnel_id, mission_id FROM DEMANDE_RETOUR ORDER BY id DESC LIMIT 1`
    connection.query(insertQuery,[ 0 , personnel_id , mission_id ] ,  (error, results) => {
        if (error) {
          console.error('Erreur lors de l\'exécution de la requête SQL:', error);
          res.status(500).json({ error: 'Erreur de la base de données' });
        }
        else{
            connection.query(selectQuery ,  (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête SQL:', error);
                    res.status(500).json({ error: 'Erreur de la base de données' });
                }else{
                    console.log("result : " , results)
                    res.status(200).json({
                        demande_retour_id : results[0].id
                    });
                }
            });
        }
    });

})



app.post('/InsertDemandeRemboursement', (req, res) => {
    const frais = parseFloat(req.body.frais)
    const personnel_id  = req.body.personnel_id
    const mission_id = req.body.mission_id
    const insertQuery = `INSERT INTO REMBOURSEMENT (etat, charges_initale, personnel_id, mission_id) VALUES (? , ?  , ?  , ?)`
    const selectQuery = `SELECT id, etat, charges_initale, personnel_id, mission_id FROM REMBOURSEMENT ORDER BY id DESC LIMIT 1`
    connection.query(insertQuery,[ 0 , frais , personnel_id , mission_id ] ,  (error, results) => {
        if (error) {
          console.error('Erreur lors de l\'exécution de la requête SQL:', error);
          res.status(500).json({ error: 'Erreur de la base de données' });
        }
        else{
            connection.query(selectQuery ,  (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête SQL:', error);
                    res.status(500).json({ error: 'Erreur de la base de données' });
                }else{
                    console.log("result : " , results)
                    res.status(200).json({
                        demande_remboursement_id : results[0].id
                    });
                }
            });
        }
    });
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
