import React from 'react';
import TimesheetItem from './timesheet-item';

// es6 destructuring pattern
export default function TimesheetList({
  items
}) {

  // function myFunc (e) {
  //   e.preventDefault();
  //   console.log('mlem')
  // }
  
  return (
    <div className="">
    {
      items.map((item, index) => (
        <TimesheetItem
          key = {index}
          name = {item.name}
          hours_worked = {item.hours_worked}
          date_worked = {item.date_worked}
          location = {item.location}
          _id = {item._id}
          status = {item.status}
        />
      ))
    }
    </div>
  )
}