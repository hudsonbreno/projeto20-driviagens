import joiBase from "joi";
import joiDate from "@joi/date";
const joi = joiBase.extend(joiDate);

const passengersSchema = joi.object({
  firstName: joi.string().min(2).max(100).required().messages({
    "string.base": `"Primeiro Nome" é um campo de texto`,
    "string.min": `"Primeiro Nome" deve ter no mínimo 2 caracteres.`,
    "string.max": `"Primeiro Nome" deve ter no máximo 100 caracteres.`,
    "any.required": `O campo "Primeiro Nome" é obrigatorio`,
  }),
  lastName: joi.string().min(2).max(100).required().messages({
    "string.base": `"Ultimo Nome" é um campo de texto`,
    "string.min": `"Ultimo Nome" deve ter no mínimo 2 caracteres.`,
    "string.max": `"Ultimo Nome" deve ter no máximo 100 caracteres.`,
    "any.required": `O campo "Ultimo Nome" é obrigatorio`,
  }),
});

const citiesSchema = joi.object({
  name: joi.string().min(2).max(50).required().messages({
    "string.base": `"Nome" é um campo de texto`,
    "string.min": `"Nome" deve ter no mínimo 2 caracteres.`,
    "string.max": `"Nome" deve ter no máximo 100 caracteres.`,
    "any.required": `O campo "Nome" é obrigatorio`,
  }),
});

const flightsSchema = joi.object({
  origin: joi.number().required().messages({
    "number.base": `"origin" é um campo deve ser um numero`,
    "any.required": `O campo "origin" é obrigatorio`,
  }),
  destination: joi.number().required().messages({
    "number.base": `"destination" é um campo deve ser um numero`,
    "any.required": `O campo "destination" é obrigatorio`,
  }),
  date: joi.date().required().messages({
    "date.base": `"Data" é um campo obrigatório`,
    "date.format": `O formato da "Data" deve ser: AAAA-MM-DD`,
    "any.required": `O campo "Data" é obrigatório`,
  }),
});

const travelObjectSchema = joi.object({
  passengerId: joi.number().required().messages({
    "number.base": `"passengerId" é um campo deve ser um numero`,
    "any.required": `O campo "passengerId" é obrigatorio`,
  }),
  flightId: joi.number().required().messages({
    "number.base": `"flighId" é um campo deve ser um numero`,
    "any.required": `O campo "flighId" é obrigatorio`,
  }),
});

const travelSchema = {
  passengersSchema,
  citiesSchema,
  flightsSchema,
  travelObjectSchema,
};

export default travelSchema;
