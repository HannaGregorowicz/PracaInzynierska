import React from "react";
import ReactTooltip from "react-tooltip";
import { shortDayName } from "../../../utils/dayParser";
import { getBackgroundColor } from "../../../utils/getGroupColor";
import { isTokenValid } from "../../../utils/jsonwebtoken";
import { signToGroup } from "../../../utils/requests";

const groupStyle: React.CSSProperties = {
  width: "100%",
  margin: "4px",
  borderRadius: "4px",
  padding: "3px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  cursor: "pointer"
};

interface IProps {
  className?: string;
  id: string;
  name: string;
  time: string;
  level: string;
  style?: React.CSSProperties;
}

const Group = (props: IProps) => {
  const handleClick = async () => {
    if (isTokenValid()) {
      const res = await signToGroup(props.id);
      if (res) {
        if (res.status === 409) {
          // TODO: alert
          console.log("Już należysz do tej grupy!");
        } else if (res.status === 201) {
          // TODO: alert
          console.log("Zapisano do grupy!");
        }
      }
    } else {
      window.location.href = "/login";
      // TODO: alert
    }
  };

  return (
    <>
      <div
        style={
          props.style
            ? props.style
            : { ...groupStyle, background: getBackgroundColor(props.level) }
        }
        className={props.className + " center"}
        data-tip={!props.style ? "Zapisz się!" : null}
        onClick={handleClick}
      >
        <p>{shortDayName(props.name)}</p>
        <p>{props.time}</p>
        <p>{props.level}</p>
      </div>
      <ReactTooltip place="right" effect="solid" />
    </>
  );
};

export default Group;
