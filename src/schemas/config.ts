import Joi from "joi";
import layoutSchema from "./layout";
import componentsSchema from "./components";

export default Joi.object({
  layout: layoutSchema.required(),
  components: Joi.array().items(componentsSchema).required(),
}).custom((value, helpers) => {
  const { layout, components } = value;
  for (const component of components) {
    if (component.x + component.width > layout.columns) {
      return helpers.error("component.exceeds.grid");
    }
  }
  return value;
});
