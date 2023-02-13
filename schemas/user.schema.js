const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const lastname = Joi.string();
const roleId = Joi.number().integer();
const volunteerMinutes = Joi.string();
const birthday = Joi.string();
const professionAreaId = Joi.number().integer();
const country = Joi.string();
const city = Joi.string();
const phoneNumber = Joi.string();
const emergencyContactName = Joi.string();
const emergencyContactRelationship = Joi.string();
const emergencyContactPhoneNumber = Joi.string();
const aboutMe = Joi.string();

const limit = Joi.number();
const offset = Joi.number();

const createUserSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  roleId: roleId.required(),
  //volunteerMinutes: volunteerMinutes.required(),
  birthday: birthday,
  professionAreaId: professionAreaId,
  country: country,
  city: city,
  phoneNumber: phoneNumber,
  emergencyContactName: emergencyContactName,
  emergencyContactRelationship: emergencyContactRelationship,
  emergencyContactPhoneNumber: emergencyContactPhoneNumber,
  aboutMe: aboutMe,
});

const updateUserSchema = Joi.object({
  name: name,
  lastname: lastname,
  roleId: roleId,
  volunteerMinutes: volunteerMinutes,
  birthday: birthday,
  professionAreaId: professionAreaId,
  country: country,
  city: city,
  phoneNumber: phoneNumber,
  emergencyContactName: emergencyContactName,
  emergencyContactRelationship: emergencyContactRelationship,
  emergencyContactPhoneNumber: emergencyContactPhoneNumber,
  aboutMe: aboutMe,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const queryUserSchema = Joi.object({
  limit,
  offset,
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema, queryUserSchema }
