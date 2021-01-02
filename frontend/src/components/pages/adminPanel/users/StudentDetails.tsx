import React, { useState, useEffect } from "react";
import { IPerson, IAbsence } from "../../../../data/dataTypes";
import { getUserAbsences } from "../../../../data/getData";

interface IProps {
  user: IPerson;
}

const StudentDetails = (props: IProps) => {
  const [absences, setAbsences] = useState<IAbsence[]>([]);

  const loadData = async () => {
    setAbsences(await getUserAbsences(props.user.id));
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [absences]);

  return <div>{absences.map(absence => absence.date.toString())}</div>;
};

export default StudentDetails;
