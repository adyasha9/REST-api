const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    case_id:{
        type:"string"
    },
    tumor_site:{
        type:"string"
    },
    BMI:{
        type:"string"
    },
    height_in_cm:{
        type:"string"
    },
    weight_in_kg:{
        type:"string"
    },


});

const User = mongoose.model('user',userSchema);
module.exports = User;