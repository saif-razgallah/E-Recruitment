const annoncesModel = require ('../models/annonces.model')


exports.getHome = (req,res,next) => {
    
    // get category
    // if category && category !=all
    //          filter
    // else
    //  render all

    let category = req.query.category
    let validCategories = ['Techniques', 'Administration','Enseignement']
    if (category && validCategories.includes(category)) {
        annoncesModel.getAnnoncesByCategory(category).then(annonces => {
            res.render('index2',{
                annonces: annonces,
                isUser: req.session.userId,
                validationError: req.flash('validationErrors')[0],
                isAdmin: req.session.isAdmin
               
            })
        })
    } else {

    //get products
    //render index.ejs

    annoncesModel.getAllAnnonces().then(annonces => {
        res.render('index',{
            annonces: annonces,
            isUser : req.session.userId,
            validationError: req.flash('validationErrors')[0],
            isAdmin: req.session.isAdmin
            
        })
    })
    }

}