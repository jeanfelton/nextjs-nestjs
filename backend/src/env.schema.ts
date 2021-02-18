import * as Joi from "@hapi/joi";

export const environment = Joi.object({
    // NodeJS
    NODE_ENV: Joi.string().valid('development', 'production').default('development'),
    PORT: Joi.number().default(3001),
    // TypeORM
    TYPEORM_CONNECTION: Joi.string().valid().required(),
    TYPEORM_HOST: Joi.string().valid().required(),
    TYPEORM_PORT: Joi.string().valid().required(),
    TYPEORM_USERNAME: Joi.string().valid().required(),
    TYPEORM_PASSWORD: Joi.string().valid().required(),
    TYPEORM_DATABASE: Joi.string().valid().required(),
    TYPEORM_SYNCHRONIZE: Joi.boolean().valid().default(false),
    TYPEORM_LOGGING: Joi.boolean().valid().default(false),
    TYPEORM_ENTITIES: Joi.string().valid().required(),    

});
