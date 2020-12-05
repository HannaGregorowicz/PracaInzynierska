import React from "react";
import ColorLegend from "../../../common/ColorLegend";
import ScheduleTable from "../../../common/ScheduleTable";
import { IGroup } from "../../../../data/dataTypes";

interface IProps {
  groups: IGroup[];
}

const UserSchedule = (props: IProps) => {
  return (
    <>
      <h3>Twój grafik</h3>
      <ColorLegend />
      <ScheduleTable groups={props.groups} type="user" />
    </>
  );
};

export default UserSchedule;
