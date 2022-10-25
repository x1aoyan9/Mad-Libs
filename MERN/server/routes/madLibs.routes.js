const MadLibController = require('../controllers/madLibs.controller');

module.exports = (app) => {

    // Testing
    app.post('/api', MadLibController.testing);

    // CREATE
    app.post('/api/madlibs', MadLibController.createMadLib);

    // DISPLAY [ONE] & READ
    app.get('/api/madlibs/:id', MadLibController.displayMadLib);

    // DISPLAY ALL & READ
    app.get('/api/madlibs', MadLibController.displayAllMadLib);

    // UPDATE
    app.put('/api/madlibs/:id', MadLibController.updateMadLib);

    // DELETE
    app.delete('/api/madlibs/:id', MadLibController.deleteMadLib);

};