import joi from "joi"

export const ValidateSignUp = (userData) =>{
    const Schema = joi.object({
    
        fullName: joi.string().required().min(3),
        email: joi.string().required().email(),
        password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{8-15}$")),
        address: joi.array().items(joi.object({details:joi.string(),for:joi.string()})),
        phoneNumber: joi.array().items(joi.number().min(10).max(10))
    })
    return Schema.validateAsync(userData)
}

export const ValidateSignIn = (userData) =>{
    const Schema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required()
    })
    return Schema.validateAsync(userData)
}