
exports.getCandidature = (req,res,next) => {

    res.render('candidature',{
        isUser : req.session.userId,
        validationError: req.flash('validationErrors')[0],
        isAdmin: req.session.isAdmin
    })
    
}