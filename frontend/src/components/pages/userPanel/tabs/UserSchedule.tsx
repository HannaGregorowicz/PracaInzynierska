import React from "react";
import { useMediaQuery } from "react-responsive";
import ColorLegend from "../../../common/ColorLegend";
import ScheduleTable from "../../../common/ScheduleTable";
import { IGroup } from "../../../../data/dataTypes";
import { containerStyle } from "../../../common/styles";
import SmallSchedulePanel from "../../../common/SmallSchedulePanel";

interface IProps {
  groups: IGroup[];
}

const UserSchedule = (props: IProps) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  return (
    <>
      <div style={containerStyle}>
        <h3>Twój grafik</h3>
      </div>
      <ColorLegend />
      {isDesktop ? (
        <ScheduleTable groups={props.groups} type="user" />
      ) : (
        <SmallSchedulePanel groups={props.groups} type="user" />
      )}
    </>
  );
};

export default UserSchedule;
