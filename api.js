
const tascaModel = require("./models/tasca");
const { response } = require('express');

module.exports = (app) => {
    //Obtenir el llistat de tasques
    //GET al endpoint /api/tasques
    app.get('/api/tasques', async (req, res) => {

        const tasques = await tascaModel.find({});

       try {
            res.status(200).send(tasques);
       } catch (error) {
            res.status(500).send(error);
       }
    });

    //Afegir una nova tasca
    //POST al endpoint api/tasques
    //En el BODY li pasarem la tasca que volem afegir
    app.post('/api/tasques', async (req, res) => {
        const tasques = new tascaModel(req.body);
        
        try {
            await tasques.save();
            const tasq = await tascaModel.find({});
            let aux =res.status(200).send(tasq);
            console.log(aux._id);
            
        } catch (error) {
            res.status(500).send(error);
        }
    });

    //Modifica una tasca
    //PUT al endpoint api/tasques/:id
    //En el Body li pasarem la tasca que volem modificar
    app.put('/api/tasques/:id', async (req, res) => {

        const tasca = await tascaModel.findOne({_id: req.params.id});
        try {
            tasca.prioritat = req.body.prioritat;
            tasca.titol = req.body.titol;
            tasca.responsable = req.body.responsable;
            tasca.contingut = req.body.contingut;
            tasca.position = req.body.position;
            tasca.dataIni = req.body.dataIni;
            tasca.dataFin = req.body.dataFin;

            await tasca.save();
            const tasq = await tascaModel.find({});
            res.status(200).send(tasq);
        } catch (error) {
            res.status(500).send(error);
        }
    });

    //Elimina una tasca
    //DELETE al endpoint api/tasques/:id
    app.delete('/api/tasques/:id', async (req, res) => {

        const tasca = await tascaModel.deleteOne({_id: req.params.id});
        try {
            const tasq = await tascaModel.find({});
            res.status(200).send(tasq);
        } catch (error) {
            res.status(500).send(error);
        }
    });
}
