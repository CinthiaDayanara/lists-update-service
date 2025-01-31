const Joi = require("joi");

const listUpdateSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "number.base": "El ID debe ser un número entero.",
    "any.required": "El ID es obligatorio."
  }),
  name: Joi.string().min(3).max(255).optional().messages({
    "string.min": "El nombre debe tener al menos 3 caracteres.",
    "string.max": "El nombre no puede exceder los 255 caracteres."
  }),
  position: Joi.number().integer().optional().messages({
    "number.base": "La posición debe ser un número entero."
  })
});

const validateListUpdate = (data) => {
  const { error } = listUpdateSchema.validate(data, { abortEarly: false });
  if (error) throw new Error(error.details.map(err => err.message).join(", "));
};

module.exports = { validateListUpdate };
