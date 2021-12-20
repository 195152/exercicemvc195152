class Formation {
    constructor(id,nom,prix,Debut,Fin,vide) {
        this.id=id;
        this.nom = nom;
        this.prix = prix;
        this.Debut = Debut;
        this.Fin = Fin;
        this.vide = vide;
    }
    
}




//exporter cette classe pour etre importer dans les autres js
module.exports = Formation;
//module.exports = getlistformations;

