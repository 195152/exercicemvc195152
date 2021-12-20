let Formation = require('../models/userModel');

let panier = [];

let getlistformations = require('../models/gestionBDD_getList');

let ajouterInscription= require('../models/gestionBDD_addInscription');


//const { home } = require('nodemon/lib/utils');

exports.Afficherformations = function(req,res) {
    
    getlistformations(function(result) {
        res.render('home.ejs',{formations: result});
    })
    
    
    //result:json: liste qui contient l'identifiant et nom de tache
    
}


exports.Afficherpanier = function (req,res) {
    res.render('panier.ejs',{listformationpanier : panier})
    
}

exports.Finaliserinscription = function(req,res){
    if(req.session.login != undefined){
        console.log("Finaliserinscription : " + panier);
        ajouterInscription(panier,req.session.login)
        
        //vider panier
        panier = [];
        
        

        //aller page d'acceuil
        getlistformations(function(result) {
            res.render('home.ejs',{formations: result});
        })
        
    }
    else{
        
            res.render('connectionnouveau.ejs');
            
            
        }
    
   
}



exports.inscription = function(req,res){
    
    //console.log('test ======='+req.session.login);

    
        //console.log(req.query.nom);
    
        formation = new Formation(req.query.id,req.query.nom,req.query.prix,req.query.debut,req.query.fin)
    
        panier.push(formation);
        console.log(panier);
        
        let listforma = getlistformations(function(result) {
            res.render('home.ejs',{formations: result});
        }) 
    
    
}
exports.connectioninscription = function(req,res){

        //sauver dans la session le user 
        req.session.login = req.query.element ;
        console.log(req.session.login);
        
        
        console.log("Finaliserinscription : " + panier);
        ajouterInscription(panier,req.session.login)
        
        //vider panier
        //window.panier = [];
        
        //aller page d'acceuil
        getlistformations(function(result) {
            res.render('home.ejs',{formations: result});
        })
        res.send("Inscription Validée");
        //res.send('Hello' + req.session.login); 
        
        

    }

exports.suppressionPanier = function(req,res){
    console.log("souh");
    let id = req.query.id;
    panier.splice(id,1);
    
    res.render('panier.ejs',{listformationpanier : panier});
}

exports.afficherformconnection = function(req,res){
    res.render('connection.ejs');
    
}



exports.enregistrerlogin = function(req,res) {
    //sauver dans la session le user 
    req.session.login = req.query.element ;
    console.log(req.session.login);
    
    getlistformations(function(result) {
        res.render('home.ejs',{formations: result});
    })
    //res.send('Hello' + req.session.login);   
}






