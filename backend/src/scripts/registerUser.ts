import { nanoid } from "nanoid";
import { RegisterRequestBody } from "../dataTypes/requestsBodies";
import { Person } from "../database/models/person";

export const isEmailInDb = async (params: any) => {
  const emailExists = await Person.exists(params);
  return emailExists;
};

export const register = async (body: RegisterRequestBody) => {
  if (body && body.email && body.firstName && body.lastName && body.password) {
    try {
      await new Person({
        id: nanoid(),
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        phone: body.phone ? body.phone : "",
        role: "student",
        groupsIds: []
      }).save();
    } catch (err) {
      console.error(err);
    }
  }
};
