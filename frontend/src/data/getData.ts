import { IClass, IPerson, IGroup } from "./dataTypes";
import { makeLocalRequest } from "../utils/requests";

export const getClasses = async () => {
  let classes: IClass[] = [];
  const fetchedClasses = await makeLocalRequest("/classes");
  if (fetchedClasses) {
    classes = await fetchedClasses.json();
  }
  return classes;
};

export const getPersonData = async (personId: string) => {
  let personData: IPerson | null = null;
  const data = await makeLocalRequest(`/userData/${personId}`);
  if (data) {
    personData = await data.json();
  }
  return personData;
};

export const getGroups = async () => {
  let groups: IGroup[] = [];
  const fetchedGroups = await makeLocalRequest("/groups");
  if (fetchedGroups) {
    groups = await fetchedGroups.json();
  }
  return groups;
};
