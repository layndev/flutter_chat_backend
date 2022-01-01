
const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    online: {
        type: Boolean,
        default: false
    },

});

// extracting and overriding data
UserSchema.method('toJSON',  function() { // do not use arrow function because js doesnt allow [this] ref
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id; // creating new property [uid] to replace _id
    return object;
});

module.exports = model( 'User', UserSchema );