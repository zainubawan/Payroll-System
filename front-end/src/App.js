import React, { Component } from 'react';
import './App.css';
import TimesheetList from './components/timesheet-list';

class App extends Component {

  state = {
    timesheets: null
  }

  render() {
    const { timesheets } = this.state;
    return (
      <div className="App">
        {
          !!timesheets ? (
            <TimesheetList
              items={ timesheets }
            />
          ) : (
            "loading"
          )
        }
      </div>
    );
  }

  componentDidMount() {
    fetch('/test')
      .then(res => {
        console.log(res)
        return res.json();
      })
      .then(json => {
        console.log(json)
        this.setState({
          timesheets: json
        })
      })
  }
}

export default App;
