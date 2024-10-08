import Joi from "joi";

export default Joi.object({
  columns: Joi.number().integer().min(1).required(),
  rowHeight: Joi.number().positive().required(),
});
