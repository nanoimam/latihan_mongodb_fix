const adminController = require('../controller/adminController')
const middleware = require('../middleware/middleware')

module.exports = app => {
    app.get('/', adminController.index)
    app.get('/data-murid', adminController.dataMurid)
    app.get('/login', adminController.login)
    app.get('/add-murid', adminController.addMurid)
    app.get('/save-murid', adminController.saveMurid)
    app.get('/edit-murid/:id', adminController.editmurid)
    app.get('/update-murid/:id', adminController.updateMurid)
    app.get('/delete-murid/:id', adminController.deleteMurid)
    app.post('/proses', middleware.validate_user, adminController.proses)
}