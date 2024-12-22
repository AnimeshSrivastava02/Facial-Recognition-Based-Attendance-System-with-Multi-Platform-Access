// dashboard/page.js
"use client"
import { useEffect, useState } from "react";
import GlobalApi from '@/app/_services/GlobalApi';  // Adjust this if the path is different

export default function Dashboard() {
  const [attendanceData, setAttendanceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudentAttendance = async () => {
      try {
        // Assuming you have an API endpoint to get the data
        const response = await fetch('/api/attendance');
        
        // Check if response is ok
        if (!response.ok) {
          throw new Error('Failed to fetch attendance data');
        }

        const data = await response.json();
        setAttendanceData(data); // Set the fetched data to state
      } catch (err) {
        setError(err.message); // Set error if any
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    getStudentAttendance(); // Call the function
  }, []); // Empty dependency array to run only once when component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Student Attendance</h1>
      {attendanceData ? (
        <div>
          {/* Render your attendance data */}
          <ul>
            {attendanceData.map((attendance) => (
              <li key={attendance.id}>{attendance.studentName} - {attendance.isPresent ? 'Present' : 'Absent'}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}
