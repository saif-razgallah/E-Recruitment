
exports.getHome = (req,res,next) => {

    res.render('acceuil',{
        isUser : req.session.userId,
        validationError: req.flash('validationErrors')[0],
        isAdmin: req.session.isAdmin
    })
    
}