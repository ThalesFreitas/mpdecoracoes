module.exports = {
    //Verifica se o usuario e admin
    eAdmin: function(req, res, next){
        if(req.isAuthenticated() && req.user.eAdmin == 1){
            return next();
        }
        req.flash("error_msg", "Você precisa ser um Admin!")
        res.redirect("/")
    }
}