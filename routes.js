let express = require('express');

//1
let router = express.Router();//utilise la classe router d'express

let userController = require('./controllers/userController');

router.get('/', userController.Afficherformations);


router.get('/Finaliserinscription',userController.Finaliserinscription);

router.get('/ajoutconect',userController.connectioninscription);

router.get('/seconnecter',userController.afficherformconnection);
router.get('/enregistrerlogin',userController.enregistrerlogin);



router.get('/supprimer',userController.suppressionPanier);

router.post('/ajouterdanspanier',userController.inscription);

router.post('/panier',userController.Afficherpanier);
//router.get('/panier',userController.userFormhome);
module.exports = router;

