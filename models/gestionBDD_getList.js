let Formation = require('./userModel');


function getlistformations(callback){
    
    var mysql = require ("mysql");
    //database connection

    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'sousou123',
        database : 'users'
    });
    let listformations =[];

    connection.connect(function(error){if (error) console.log(error);});
    //connection.query()
   
    connection.query("select * from formations;",function(error, result){//fct query qui accede à la abse de donnée et puis executer function
        if (error) console(error);
        for(let i = 0 ; i < result.length ; i++)
        {
            let element = new Formation(result[i]["idformations"],result[i]["nom"],result[i]["prix"],result[i]["Début"],result[i]["Fin"],result[i]["vide"])
            
            
            listformations.push(element);
        }
        
        
        callback(listformations);
    });
}
module.exports = getlistformations;