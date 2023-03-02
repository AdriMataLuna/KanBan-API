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

/* declarem una estructura tasca i l'exportem per poder-la cridar */
const Tasques = mongoose.model("tasques", TascaSchema);

module.exports = Tasques;
