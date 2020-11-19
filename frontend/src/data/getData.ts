import { IClasses } from "./dataTypes";

export const getClasses = async () => {
  let parsedClasses: IClasses[] = [];
  try {
    const fetchedClasses = await fetch("/classes");
    if (fetchedClasses) {
      parsedClasses = await fetchedClasses.json();
    }
  } catch (err) {}
  return parsedClasses;
};
