const mongoose = require("mongoose");
const Joi = require("joi");



const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    role: {
        type: String,
        default: "regular"
    },
    date_created: {
        type: Date,
        default: Date.now()
    }
})

exports.UsersModel = mongoose.model("users", userSchema);

exports.validUser = (_bodyData) => {
    const joiSchema = Joi.object({
        name: Joi.string().min(2).max(99).required(),
        email: Joi.string().min(2).max(300).required().email(),
        pass: Joi.string().min(3).max(100).required(),
    })

    return joiSchema.validate(_bodyData);
}

exports.validLogin = (_bodyData) => {
    const joiSchema = Joi.object({
        email: Joi.string().min(2).max(300).required().email(),
        pass: Joi.string().min(3).max(100).required(),
    })

    return joiSchema.validate(_bodyData);
}
