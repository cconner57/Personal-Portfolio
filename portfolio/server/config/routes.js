const CommerceCtrl = require('./../controllers/CommerceCtrl.js');

module.exports = (app) => {
    app.get('/api/products', CommerceCtrl.index);
}