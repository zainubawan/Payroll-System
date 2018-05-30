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
    <div className="container">
      <div className="row">
        <div className="col">
          <div>Date worked: {date}</div>
          <div>Day worked: {day}</div>
        </div>
        <div className="col">
          <div>Hours worked: {hoursWorked}</div>
          <div>Submitted by: {employeeID}</div>
        </div>
        <div className="col">
          <div>Status: {status}</div>
        </div>
      </div>
    </div>
  )
}