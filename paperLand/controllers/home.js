function landingPage (req , res){
    res.render("landingPage.ejs")
}

function usine (req, res) {    
    res.render('usine.ejs')
}

function categorie (req , res){
    res.render("categorie.ejs")
}
async function specificBag (req , res){
    
    res.render('specificBag.ejs' )
}
async function contact (req , res){
    res.render('contact.ejs')
    
}
async function delivery (req , res){
    res.render('delivery.ejs')
}
async  function sav (req , res){
    res.render('sav.ejs')
}

async function sizePage (req , res){
    res.render('size-torsade.ejs')
}
function sizePlatePage (req , res){
    res.render("size-plate.ejs")
}

module.exports.landingPage = landingPage
module.exports.usine = usine
module.exports.categorie = categorie
module.exports.specificBag = specificBag
module.exports.contact = contact 
module.exports.delivery = delivery
module.exports.sav = sav
module.exports.sizePage = sizePage
module.exports.sizePlatePage = sizePlatePage
module.exports.sav = sav