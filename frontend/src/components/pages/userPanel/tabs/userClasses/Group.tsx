import React, { useState } from "react";
import { toast } from "react-toastify";
import { IGroup } from "../../../../../data/dataTypes";
import { isTokenValid } from "../../../../../utils/jsonwebtoken";
import {
  signOutFromGroup,
  signOutFromGroupOnce
} from "../../../../../utils/requests";
import SignOutButton from "./SignOutButton";

const divStyle: React.CSSProperties = {
  textTransform: "capitalize",
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  background: "#e7defa",
  padding: "10px",
  margin: "5px 0",
  borderRadius: "3px"
};

interface IProps {
  group: IGroup;
  type: string;
  reloadData: () => Promise<void>;
}

// TODO: Handle these buttons

const Group = (props: IProps) => {
  const group = props.group;
  const [signedOut, setSignedOut] = useState(false);

  const handleSignOut = async (type: string) => {
    if (isTokenValid()) {
      setSignedOut(true);
      let res;
      if (type === "oneTime") {
        res = await signOutFromGroupOnce(group.id);
      } else if (type === "regular") {
        res = await signOutFromGroup(group.id);
      }
      if (res) {
        if (res.status === 400) {
          toast.error("Coś poszło nie tak!");
        } else if (res.status === 200) {
          await props.reloadData();
          toast.success(
            `Wypisano z zajęć: ${[
              group.name,
              group.level,
              group.day,
              group.time
            ].join(" ")}`
          );
        }
      }
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div style={divStyle}>
      <p>{group.name}</p>
      <p>{group.level}</p>
      <p>{group.day}</p>
      <p>{group.time}</p>
      <p>{group.instructor}</p>
      {props.type === "regular" && (
        <SignOutButton
          type="absence"
          signedOut={signedOut}
          handleSignOut={handleSignOut}
          text="Zgłoś nieobecność"
        />
      )}
      {props.type === "regular" && (
        <SignOutButton
          type="regular"
          signedOut={signedOut}
          handleSignOut={handleSignOut}
          text="Wypisz się"
        />
      )}
      {props.type === "oneTime" && <p />}
      {props.type === "oneTime" && (
        <SignOutButton
          type="oneTime"
          signedOut={signedOut}
          handleSignOut={handleSignOut}
          text="Zrezygnuj"
        />
      )}
    </div>
  );
};

export default Group;
