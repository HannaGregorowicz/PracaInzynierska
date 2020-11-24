import jwt from "jsonwebtoken";
import { LoginRequestBody } from "../dataTypes/requestsBodies";
import { Person, IPerson } from "../database/models/person";
import config from "../config";

const isUserCorrect = async (body: LoginRequestBody) => {
  return await Person.exists(body);
};

const getPersonData = async (email: string) => {
  const person: IPerson = await Person.findOne({ email: email }).exec();
  return {
    personId: person.id,
    personRole: person.role
  };
};

export const createToken = async (body: LoginRequestBody) => {
  if (body && (await isUserCorrect(body))) {
    const JWT_KEY = config.JWT_KEY;
    try {
      const personData = await getPersonData(body.email);
      const token = jwt.sign(personData, JWT_KEY, { expiresIn: 3600 });
      return token;
    } catch (err) {
      console.error(err);
    }
  }
  return null;
};
