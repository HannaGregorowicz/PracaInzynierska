import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { IPerson } from "../../../../data/dataTypes";
import { getUsers } from "../../../../data/getData";
import StudentItem from "./StudentItem";
import AdminItem from "./AdminItem";

const templateStyle: React.CSSProperties = {
  width: "95%",
  margin: "auto",
  display: "grid"
};

const divStyle: React.CSSProperties = {
  ...templateStyle,
  gridTemplateColumns: "1fr 1fr",
  gap: "40px"
};

const smallDivStyle: React.CSSProperties = {
  ...templateStyle,
  gridTemplateColumns: "1fr"
};

const containerStyle: React.CSSProperties = {};

const Users = () => {
  const [users, setUsers] = useState<IPerson[]>([]);
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)"
  });

  const loadData = async () => {
    const users = await getUsers();
    const sortedUsers = users.sort((a, b) =>
      b.lastName < a.lastName ? 1 : -1
    );
    setUsers(sortedUsers);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  const makeStudent = (user: IPerson) => {
    return <StudentItem user={user} key={user.id} />;
  };

  const makeAdmin = (user: IPerson) => {
    return <AdminItem user={user} key={user.id} />;
  };

  const makeStudents = () => {
    return users.filter(user => user.role === "student").map(makeStudent);
  };

  const makeAdmins = () => {
    return users
      .filter(
        user =>
          user.email !== "admin@moderndancestudio.com" && user.role === "admin"
      )
      .map(makeAdmin);
  };

  return (
    <div style={isMobile ? smallDivStyle : divStyle}>
      <div style={containerStyle}>
        <h3>Kursanci:</h3>
        {makeStudents()}
      </div>

      <div style={containerStyle}>
        <h3>Administratorzy:</h3>
        {makeAdmins()}
      </div>
    </div>
  );
};

export default Users;
