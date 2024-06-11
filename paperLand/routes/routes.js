const express = require("express")
const homeController = require('../controllers/home.js')

const router = express.Router()

router.get('/' , homeController.landingPage)
router.get('/usine', homeController.usine)
router.get('/categorie' , homeController.categorie)
router.get('/specific' , homeController.specificBag)
router.get('/contact' , homeController.contact)
router.get('/delivery' , homeController.delivery)
router.get('/sav' , homeController.sav)
router.get('/size-torsade' , homeController.sizePage)
router.get("/size-plate" , homeController.sizePlatePage)
module.exports.router = router