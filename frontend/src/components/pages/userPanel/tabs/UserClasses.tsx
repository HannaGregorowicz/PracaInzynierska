import React from "react";

const UserClasses = (props: any) => {
  return props.groups ? (
    <>
      <h3>Twoje zajęcia</h3>
    </>
  ) : (
    <h3>Brak zajęć!</h3>
  );
};

export default UserClasses;
