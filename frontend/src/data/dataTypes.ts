export interface IClass {
  name: string;
  description: string;
  imageName: string;
  groups: {
    id: number;
    day: string;
    time: string;
    level: string;
  };
}

export interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  groupsIds: string[];
  oneTimeGroupsIds: string[];
  absences: {
    groupId: string;
    date: Date;
    status: string;
  }[];
}

export interface IGroup {
  id: string;
  name: string;
  day: string;
  instructor: string;
  time: string;
  peopleLimit: number;
  room: string;
  level: string;
  peopleIds: string[];
}

export interface IAbsence {
  groupId: string;
  date: Date;
  status: string;
}
