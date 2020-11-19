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
