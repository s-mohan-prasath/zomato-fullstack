import joi from "joi"

export const ValidateId = (userData) =>{
    const Schema = joi.object({
        _id:joi.string().required()
    })
    return Schema.validateAsync(userData)
}

export const ValidateCategory = (userData) =>{
    const Schema = joi.object({
        category:joi.string().required()
    })
    return Schema.validateAsync(userData)
}