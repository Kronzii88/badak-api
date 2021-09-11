const joi = require("joi");

const register = joi.object({
  header: joi.object().unknown(),
  body: joi.object({
    username: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
  }),
});
