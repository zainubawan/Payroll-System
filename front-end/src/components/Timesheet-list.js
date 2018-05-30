import React from 'react';
import TimesheetItem from './timesheet-item';

// es6 destructuring pattern
export default function TimesheetList({
  items
}) {

  function myFunc (e) {
    e.preventDefault();
    console.log('mlem')
  }
  
  return (
    <div className="timesheet-container">
    {
      items.map((item, index) => (
        <TimesheetItem
          key = {index}
          date = {item.date}
          day = {item.day}
          hoursWorked = {item.hoursWorked}
          employeeID = {item.employeeID}
          status = {item.status}
        />
      ))
    }
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  )
}