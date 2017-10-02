import React from 'react';
import Profile from './profile/Profile.jsx';
import Courses from './courses/Courses.jsx';
import Social from './social/Social.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container col-xs-12">
        <div className="col-sm-3 col-xs-12">
          <Profile />
        </div>
        <div id="social" className="col-sm-6 col-xs-12">
          <Courses />
        </div>
        <div className="col-sm-3 col-xs-12">
          <Social />
        </div>
      </div>
    );
  }
}

export default App;
