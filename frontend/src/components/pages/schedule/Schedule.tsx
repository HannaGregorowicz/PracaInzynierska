import React, { useState, useEffect } from "react";
import { IGroup } from "../../../data/dataTypes";
import { getGroups } from "../../../data/getData";
import GroupItem from "./GroupItm";

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
        {groups.length
          ? groups.map(group => (
              <GroupItem
                name={group.name}
                day={group.day}
                time={group.time}
                instructor={group.instructor}
              />
            ))
          : "Coś poszło nie tak!"}
      </div>
      <div className="topDivider" />
    </>
  );
};

export default Schedule;
