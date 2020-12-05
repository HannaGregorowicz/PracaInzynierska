import React, { useState, useEffect } from "react";
import { IGroup } from "../../../data/dataTypes";
import { getGroups } from "../../../data/getData";
import ScheduleTable from "./ScheduleTable";
import ColorLegend from "./ColorLegend";

const Schedule = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);

  const loadData = async () => {
    setGroups(await getGroups());
  };

  useEffect(() => {
    loadData();
  });

  return (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <h2 className="center">Grafik</h2>
        <ColorLegend />
        <ScheduleTable groups={groups} />
      </div>
      <div className="topDivider" />
    </>
  );
};

export default Schedule;
