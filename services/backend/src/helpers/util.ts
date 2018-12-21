import * as Joi from 'joi';

export const validate = (param, schema) => {
    return new Promise((resolve, reject) => {
        Joi.validate(param, schema, (err, data)=> {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
}
