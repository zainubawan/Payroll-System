import React from 'react';

// es6 destructuring pattern
export default function TimesheetItem({
  date,
  day,
  hoursWorked,
  employeeID,
  status // status?
}) {
  return (
    <div>
      <div>{date}</div>
      <div>{day}</div>
      <div>{hoursWorked}</div>
      <div>{employeeID}</div>
      <div>{status}</div>
    </div>
  )
}