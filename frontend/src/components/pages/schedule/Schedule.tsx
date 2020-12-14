import React, { useState, useEffect } from "react";
import { IGroup } from "../../../data/dataTypes";
import { getGroups } from "../../../data/getData";
import ColorLegend from "../../common/ColorLegend";
import ScheduleTable from "../../common/ScheduleTable";
import { useMediaQuery } from "react-responsive";
import SmallSchedulePanel from "../../common/SmallSchedulePanel";

const Schedule = () => {
  const [groups, setGroups] = useState<IGroup[]>([]);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

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
        {isDesktop ? (
          <ScheduleTable groups={groups} type="main" />
        ) : (
          <SmallSchedulePanel groups={groups} type="main" />
        )}
      </div>
      <div className="topDivider" />
    </>
  );
};

export default Schedule;
