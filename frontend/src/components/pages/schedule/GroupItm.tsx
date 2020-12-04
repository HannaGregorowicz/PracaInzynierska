import React from "react";

const GroupItem = (props: any) => {
  return (
    <>
      <h5>{props.name}</h5>
      <p>{props.day}</p>
      <p>{props.time}</p>
      <p>{props.instructor}</p>
    </>
  );
};

export default GroupItem;
