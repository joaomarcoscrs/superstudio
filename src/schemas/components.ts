import Joi from "joi";

export default Joi.object({
  id: Joi.string().required(),
  type: Joi.string().required(),
  x: Joi.number().integer().min(0).required(),
  y: Joi.number().integer().min(0).required(),
  width: Joi.number().integer().min(1).required(),
  height: Joi.number().integer().min(1).required(),
  properties: Joi.object().required(),
});
