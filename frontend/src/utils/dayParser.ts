export const shortDayName = (name: string) => {
  switch (name) {
    case "Poniedziałek":
      return "Pn";
    case "Wtorek":
      return "Wt";
    case "Środa":
      return "Śr";
    case "Czwartek":
      return "Czw";
    case "Piątek":
      return "Pt";
    case "Sobota":
      return "Sb";
    case "Niedziela":
      return "Nd";
  }
  return name;
};
