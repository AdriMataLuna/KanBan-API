const mongoose = require("mongoose");

//creem l'esquema de les tasques
const TascaSchema = new mongoose.Schema({
    titol: {
        type: String
    },
    responsable: {
        type: String
        
    },
    contingut: {
        type: String
    },
    dataIni: {
        type: Date
    },
    dataFin: {
        type: Date
    },
    prioritat: {
        type: String
    },
    position: {
        type: String
    }
    
},{
    versionKey : false
});

//declarem una 'conts' Tasques a la que li assignem el model de tasques amb l'esquema fet previament
const Tasques = mongoose.model("tasques", TascaSchema);

module.exports = Tasques;



/* [{
  "titol":"Exemple tasca",
  "responsable":"Adria",
  "contingut":"Exemple d'una tasca",
  "dataIni": "",
  "dataFin": "",
  "prioritat": "",
  "position":"todo"
}] */