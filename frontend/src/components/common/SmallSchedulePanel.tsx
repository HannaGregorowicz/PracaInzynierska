import React from "react";
import { IGroup } from "../../data/dataTypes";
import SmallGroupItem from "./SmallGroupItem";

interface IProps {
  groups: IGroup[];
  type: string;
}

const SmallSchedulePanel = (props: IProps) => {
  const getDayGroups = (day: string) => {
    const data: IGroup[] = [];
    for (const group of props.groups) {
      if (day === group.day) {
        data.push(group);
      }
    }
    const sortedData = data.sort((a, b) => (a.time < b.time ? -1 : 1));
    return sortedData;
  };

  const makeGroup = (group: IGroup) => {
    return <SmallGroupItem group={group} type={props.type} />;
  };

  const makeGroupsForDay = (day: string) => {
    const groups = getDayGroups(day);
    return groups.map(group => makeGroup(group));
  };

  return (
    <div>
      <h3 className="center">Poniedziałek</h3>
      {makeGroupsForDay("Poniedziałek")}
      <br />
      <h3 className="center">Wtorek</h3>
      {makeGroupsForDay("Wtorek")}
      <br />
      <h3 className="center">Środa</h3>
      {makeGroupsForDay("Środa")}
      <br />
      <h3 className="center">Czwartek</h3>
      {makeGroupsForDay("Czwartek")}
      <br />
      <h3 className="center">Piątek</h3>
      {makeGroupsForDay("Piątek")}
      <br />
      <h3 className="center">Sobota</h3>
      {makeGroupsForDay("Sobota")}
    </div>
  );
};

export default SmallSchedulePanel;
