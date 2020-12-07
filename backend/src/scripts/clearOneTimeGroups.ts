import cron from "node-cron";
import { Person } from "../database/models/person";
import { Group } from "../database/models/group";

const clearGroup = async (day: string) => {
  console.log(`Clearing "${day}" groups...`);
  await Group.updateMany({ day: day }, { $set: { oneTimePeopleIds: [] } });

  const allGroupsToClear = await Group.find({ day: day });
  for (const group of allGroupsToClear) {
    await Person.updateMany(
      { oneTimeGroupsIds: group.id },
      { $pull: { oneTimeGroupsIds: group.id } }
    );
  }
  console.log("Clearing done!");
};

export const clearOneTimeGroups = () => {
  cron.schedule("0 2 * * 2", () => {
    clearGroup("Poniedziałek");
  });
  cron.schedule("0 2 * * 3", () => {
    clearGroup("Wtorek");
  });
  cron.schedule("0 2 * * 4", () => {
    clearGroup("Środa");
  });
  cron.schedule("0 2 * * 5", () => {
    clearGroup("Czwartek");
  });
  cron.schedule("0 2 * * 6", () => {
    clearGroup("Piątek");
  });
  cron.schedule("0 2 * * 7", () => {
    clearGroup("Sobota");
  });
};
