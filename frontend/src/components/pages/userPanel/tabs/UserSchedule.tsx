import React from "react";
import ColorLegend from "../../../common/ColorLegend";
import ScheduleTable from "../../../common/ScheduleTable";
import { IGroup } from "../../../../data/dataTypes";
import { containerStyle } from "../../../common/styles";

interface IProps {
  groups: IGroup[];
}

const UserSchedule = (props: IProps) => {
  return (
    <>
      <div style={containerStyle}>
        <h3>Twój grafik</h3>
      </div>
      <ColorLegend />
      <ScheduleTable groups={props.groups} type="user" />
    </>
  );
};

export default UserSchedule;
