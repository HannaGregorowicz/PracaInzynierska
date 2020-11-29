import { IClasses, IPerson } from "./dataTypes";
import { makeLocalRequest } from "../utils/requests";

export const getClasses = async () => {
  let parsedClasses: IClasses[] = [];
  const fetchedClasses = await makeLocalRequest("/classes");
  if (fetchedClasses) {
    parsedClasses = await fetchedClasses.json();
  }
  return parsedClasses;
};

export const getPersonData = async (personId: string) => {
  let personData: IPerson | null = null;
  const data = await makeLocalRequest(`/userData/${personId}`);
  if (data) {
    personData = await data.json();
  }
  return personData;
};
