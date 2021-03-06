/**
 * Created by zhaiyingying on 2016/11/30.
 * @file
 * @author
 * @app
 */
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/posts');
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.render('404');
        }
    });
    app.use(function (err, req, res, next) {
        res.render('error', {
            error: err
        });
    });
};
