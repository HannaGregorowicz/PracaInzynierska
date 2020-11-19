import { IClasses } from "./dataTypes";

export const getClasses = async () => {
  let parsedClasses: IClasses[] = [];
  try {
    const fetchedClasses = await fetch("/classes");
    parsedClasses = await fetchedClasses.json();
  } catch (err) {
    console.log(err);
  }
  return parsedClasses;
};
