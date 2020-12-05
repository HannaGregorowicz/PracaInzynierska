import React from "react";
import TableCell from "./TableCell";

const tableStyle: React.CSSProperties = {
  width: "95%",
  margin: "auto",
  border: "1px solid black",
  borderCollapse: "collapse",
  textAlign: "center"
};

const tdStyle: React.CSSProperties = {
  border: "1px solid black",
  height: "16vh"
};

const ScheduleTable = (props: any) => {
  const getGroups = (day: string, time: string) => {
    const data = [];
    for (const group of props.groups) {
      if (day === group.day && time === group.time) {
        data.push(group);
      }
    }
    return data;
  };

  const makeCell = (day: string, time: string) => {
    return <TableCell groups={getGroups(day, time)} />;
  };

  const makeTimeCells = (time: string) => {
    const days = [
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota"
    ];
    return days.map(day => makeCell(day, time));
  };

  return (
    <>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Godzina</th>
            <th>Poniedziałek</th>
            <th>Wtorek</th>
            <th>Środa</th>
            <th>Czwartek</th>
            <th>Piątek</th>
            <th>Sobota</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>14:00</td>
            {makeTimeCells("14:00")}
          </tr>
          <tr>
            <td style={tdStyle}>15:00</td>
            {makeTimeCells("15:00")}
          </tr>
          <tr>
            <td style={tdStyle}>16:00</td>
            {makeTimeCells("16:00")}
          </tr>
          <tr>
            <td style={tdStyle}>17:00</td>
            {makeTimeCells("17:00")}
          </tr>
          <tr>
            <td style={tdStyle}>18:00</td>
            {makeTimeCells("18:00")}
          </tr>
          <tr>
            <td style={tdStyle}>19:00</td>
            {makeTimeCells("19:00")}
          </tr>
          <tr>
            <td style={tdStyle}>20:00</td>
            {makeTimeCells("20:00")}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ScheduleTable;