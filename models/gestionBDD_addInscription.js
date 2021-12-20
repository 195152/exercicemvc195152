let Formation = require('./userModel');


function ajouterInscription(panier,login){
    
    var mysql = require ("mysql");
    //database connection

    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'sousou123',
        database : 'users'
    });
    connection.connect(function(error){if (error) console.log(error);});
    //connection.query()
    console.log("souha");
    for(let i = 0 ; i < panier.length ; i++)  
    //{console.log("achou");
    {
        console.log("test" + panier);
        let id = panier[i].id;
        console.log("ac");
        
        let element = {"login":login,"idformation":id};
        connection.query("INSERT INTO inscription SET ? ", element,function(err,result) {
        //fct query qui accede à la abse de donnée et puis executer function
            if (err) console(err);
        });
    }
    
     
}


module.exports = ajouterInscription;