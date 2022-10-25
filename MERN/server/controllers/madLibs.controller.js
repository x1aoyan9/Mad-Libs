const MadLib = require('../models/madLibs.model');

module.exports = {

    // Testing
    testing: (req, res) => {
    res.send("successfully got here");
    },

    // CREATE
    createMadLib: (req, res) => {
    MadLib.create(req.body)
        .then((newMadLib) => res.json(newMadLib))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY [ONE]
    displayMadLib: (req, res) => {
    MadLib.findOne({_id: req.params.id })
        .then((oneMadLib) => res.json(oneMadLib))
        .catch((err) => {
            res.json(err);
        });
    },

    // DISPLAY ALL
    displayAllMadLib: (req, res) => {
    MadLib.find({})
        .then((allMadLibs) => res.json(allMadLibs))
        .catch((err) => {
            res.json(err);
        });
    },

    // UPDATE
    updateMadLib: (req, res) => {
    MadLib.findOneAndUpdate({_id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateMadLib) => res.json({updateMadLib}))
        .catch((err) => {
            res.json(err);
        });
    },

    // DELETE
    deleteMadLib: (req, res) => {
    MadLib.findOneAndDelete({_id : req.params.id })
        .then((deletedMadLib) => res.json(deletedMadLib))
        .catch((err) => {
            res.json(err);
        });
    },
};