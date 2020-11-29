export interface IClasses {
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
}
