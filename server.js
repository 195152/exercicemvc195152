const { render } = require('ejs');
let express = require('express');

let app = express();
let session = require('express-session');

app.use(session({
    secret : 'my secret',
    resave: false,
    saveUninitialized: true
    })
);   
//body au début est un texte brute dons il faut traiter ce body 
app.use(express.urlencoded({extended : true}));
let router = require ('./routes');
app.use('/',router)


//une fois j'ai cliquer sur le lien seconnecter qui est dans la page princpale(home.ejs) il m'affiche l'autre page(connection.ejs)
/*app.get('/seconnecter',(req,res)=>{
 res.render("connection.ejs");//afficher cette page
})


app.get('/Panier',(req,res)=>{
 res.render("connection.ejs");//afficher cette page
})



*/
app.use(express.static('public'));

app.listen(3000,function() {
 console.log('Server is running on port 3000')
});