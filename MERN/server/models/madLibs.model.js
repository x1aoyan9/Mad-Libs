const mongoose = require('mongoose');

const MadLibsSchema = new mongoose.Schema({

    // Your Name
    yourName: {
        type: String,
        required: [true, "Please enter your name"],
        minLength: [1, "Must be filled in"]
    },

    // Adjective
    adjective: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"],
    },

    // Adjective
    adjective2: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"],
    },

    // Noun
    noun: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"],
    },

    // Noun
    noun2: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"],
    },

    // Plural Noun
    pluralNoun: {
        type: String,
        required: [true, "Please enter a plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Game
    game: {
        type: String,
        required: [true, "Please enter a game"],
        minLength: [1, "Must be filled in"],
    },

    // Plural Noun
    pluralNoun2: {
        type: String,
        required: [true, "Please enter a plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Verb Ending in '-ING'
    verbEnding_ING: {
        type: String,
        required: [true, "Please enter a verb ending with '-ING'"],
        minLength: [1, "Must be filled in"],
    },

    // Verb Ending in '-ING'
    verbEnding_ING2: {
        type: String,
        required: [true, "Please enter a verb ending with '-ING'"],
        minLength: [1, "Must be filled in"],
    },

    // Plural Noun
    pluralNoun3: {
        type: String,
        required: [true, "Please enter a plural noun"],
        minLength: [1, "Must be filled in"],
    },

    // Verb Ending in '-ING'
    verbEnding_ING3: {
        type: String,
        required: [true, "Please enter a verb ending with '-ING'"],
        minLength: [1, "Must be filled in"],
    },

    // Noun
    noun3: {
        type: String,
        required: [true, "Please enter a noun"],
        minLength: [1, "Must be filled in"],
    },

    // Plant
    plant: {
        type: String,
        required: [true, "Please enter a plant"],
        minLength: [1, "Must be filled in"],
    },

    // Part of the Body
    bodyPart: {
        type: String,
        required: [true, "Please enter a pard of the body"],
        minLength: [1, "Must be filled in"],
    },

    // A Place
    place: {
        type: String,
        required: [true, "Please enter a place"],
        minLength: [1, "Must be filled in"],
    },

    // Verb Ending in '-ING'
    verbEnding_ING4: {
        type: String,
        required: [true, "Please enter a verb ending with '-ING'"],
        minLength: [1, "Must be filled in"],
    },

    // Adjective
    adjective3: {
        type: String,
        required: [true, "Please enter an adjective"],
        minLength: [1, "Must be filled in"],
    },

    // Number
    number: {
        type: Number,
        required: [true, "Please enter a number"],
        min: [0, "Must be greater than or equal to zero"],
        max: [100000000001, "Must be less than or equal to 100,000,000,000"],
    },

    // Plural Noun
    pluralNoun4: {
        type: String,
        required: [true, "Please enter a plural noun"],
        minLength: [1, "Must be filled in"],
    },

}, { timestamps: true });

module.exports = mongoose.model('MabLibs', MadLibsSchema);