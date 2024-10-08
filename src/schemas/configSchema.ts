import Joi from "joi";

const configSchema = Joi.object({
  layout: Joi.object({
    columns: Joi.number().integer().min(1).required(),
    rowHeight: Joi.number().positive().required(),
  }).required(),
  components: Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        type: Joi.string().required(),
        x: Joi.number().integer().min(0).required(),
        y: Joi.number().integer().min(0).required(),
        width: Joi.number().integer().min(1).required(),
        height: Joi.number().integer().min(1).required(),
        properties: Joi.object().required(),
      })
    )
    .required(),
}).custom((value, helpers) => {
  const { layout, components } = value;
  for (const component of components) {
    if (component.x + component.width > layout.columns) {
      return helpers.error("component.exceeds.grid");
    }
  }
  return value;
});

export default configSchema;
