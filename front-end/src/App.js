import React, { Component } from 'react';
import './App.css';
import TimesheetList from './components/Timesheet-list';

class App extends Component {

  state = {
    timesheets: null
  }

  render() {
    const timesheets = this.state.timesheets;

    return (
      <div className="App">
        {
          timesheets ? (
            <TimesheetList items="{timesheets}" />
          ) : (
            "loading"
          )
        }
      </div>
    );
  }

  componentDidMount() {
    fetch('/test')
      .then(res => res.json())
      .then(json => {
        console.log([json])
        this.setState({
          timesheets: [json]
        })
      })
  }
}

export default App;
