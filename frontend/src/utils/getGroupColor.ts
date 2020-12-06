export const getBackgroundColor = (level: string) => {
  const yellow = "#FDF6DC";
  const lightOrange = "#FDEACA";
  const orange = "#FFD4B8";
  const green = "#D2EBD8";
  const blue = "#ACC5E8";
  const pink = "#F9E0E3";

  switch (level) {
    case "P0":
      return yellow;
    case "P1":
      return lightOrange;
    case "P2":
      return orange;
    case "S":
      return green;
    case "Z":
      return blue;
    case "Open":
      return pink;
  }
  return "#ffffff";
};
