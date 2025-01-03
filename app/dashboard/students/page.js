"use client";

import React, { useEffect, useState } from "react";
import AddNewStudent from "./_components/AddNewStudent"; // Ensure the path is correct
import GlobalApi from "../../_services/GlobalApi"; // Ensure the path is correct
import Studentlisttable from "./_components/Studentlisttable";

function Student() {
  const [studentslist, setstudentslist] = useState([]);

  useEffect(() => {
    GetAllStudents();
  }, []);

  const GetAllStudents = () => {
    GlobalApi.GetAllStudents()
      .then((data) => {
        if (data) setstudentslist(data); // Updated to handle data directly
      })
      .catch((error) => console.error("Error fetching students:", error));
  };

  return (
    <div className="p-7">
      <h2 className="font-bold text-2xl flex justify-between items-center">
        Students
        <AddNewStudent refreshData={GetAllStudents} /> {/* Add button */}
      </h2>
      <Studentlisttable
        studentslist={studentslist}
        refreshData={GetAllStudents}
      />
    </div>
  );
}

export default Student;
