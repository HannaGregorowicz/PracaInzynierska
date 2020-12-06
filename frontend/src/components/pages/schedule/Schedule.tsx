import React, { useState, useEffect } from "react";
import { IGroup } from "../../../data/dataTypes";
import { getGroups } from "../../../data/getData";
import ColorLegend from "../../common/ColorLegend";
import ScheduleTable from "../../common/ScheduleTable";

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
        <ScheduleTable groups={groups} type="main" />
      </div>
      <div className="topDivider" />
    </>
  );
};

export default Schedule;
