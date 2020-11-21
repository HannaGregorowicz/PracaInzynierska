import { nanoid } from "nanoid";
import { RegisterRequestBody } from "../dataTypes/requestsBodies";
import { Person } from "../database/models/person";
import { IPerson } from "../dataTypes/person";

const parseBodyToPerson = (body: RegisterRequestBody) => {
  if (body && body.email && body.firstName && body.lastName && body.password) {
    const parsedBody: IPerson = {
      id: nanoid(),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
      phone: body.phone ? body.phone : "",
      role: "student",
      groupsIds: []
    };
    return parsedBody;
  } else {
    return null;
  }
};

export const register = async (body: RegisterRequestBody) => {
  const parsedBody = parseBodyToPerson(body);
  if (parsedBody) {
    try {
      await new Person(parsedBody).save();
    } catch (err) {
      console.error(err);
    }
  }
};
