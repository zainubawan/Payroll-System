import React from 'react';
import TimesheetItem from './Timesheet-item';

// es6 destructuring pattern
export default function TimesheetList({
  items
}) {
  return (
    <div class="timesheet-container">
      {
        items.map((item) => (
          <TimesheetItem
            hours={item.hoursWorked}
            day={item.day}
            date={item.date}
            status={item.status}
          />
        ))
      }
    </div>
  )
}