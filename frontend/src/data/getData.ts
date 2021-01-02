import { IClass, IPerson, IGroup, IAbsence, IInstructor } from "./dataTypes";
import { makeLocalRequest } from "../utils/requests";

export const getClasses = async () => {
  let classes: IClass[] = [];
  const fetchedClasses = await makeLocalRequest("/classes");
  if (fetchedClasses) {
    classes = await fetchedClasses.json();
  }
  return classes;
};

export const getInstructors = async () => {
  let instructors: IInstructor[] = [];
  const fetchedInstructors = await makeLocalRequest("/instructors");
  if (fetchedInstructors) {
    instructors = await fetchedInstructors.json();
  }
  return instructors;
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

export const getUsers = async () => {
  let users: IPerson[] = [];
  const fetchedUsers = await makeLocalRequest("/users");
  if (fetchedUsers) {
    users = await fetchedUsers.json();
  }
  return users;
};

export const getSingleGroup = async (ID: string) => {
  const group = await makeLocalRequest(`/groups/${ID}`);
  if (group) {
    return await group.json();
  }
};

export const getGroupsFromIds = async (IDs: string[]) => {
  let groups: IGroup[] = [];
  for (const ID of IDs) {
    const group = await makeLocalRequest(`/groups/${ID}`);
    if (group) {
      groups.push(await group.json());
    }
  }
  return groups;
};

export const getUserAbsences = async (userId: string) => {
  let absences: IAbsence[] = [];
  try {
    const data = await makeLocalRequest(`/absence/${userId}`);
    if (data) {
      absences = await data.json();
    }
  } catch (err) {}
  return absences;
};
