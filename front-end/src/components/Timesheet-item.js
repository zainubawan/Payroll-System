import React from 'react';

// es6 destructuring pattern
export default function TimesheetItem({
  name,
  hours_worked,
  date_worked,
  location,
  status // status?
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>Submitted by: {name}</div>
          <div>Hours worked: {hours_worked}</div>
          <div>Date: {date_worked}</div>
          <div>Location: {location}</div>
          <div>Status: {status}</div>
          <br/>
        </div>
      </div>
    </div>
  )
}
