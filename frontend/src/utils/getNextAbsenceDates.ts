export const getNextAbsenceDates = (day: string) => {
  const dates: string[] = [];
  const days = [
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota"
  ];

  const adder = days.indexOf(day) + 1;
  for (let i = 0; i < 4; i++) {
    const d = new Date();
    d.setDate(d.getDate() + ((7 - d.getDay()) % 7) + i * 7 + adder);
    dates.push(d.toString());
  }

  return dates;
};
