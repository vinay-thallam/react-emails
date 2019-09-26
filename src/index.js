import React from 'react';
import ReactDOM from 'react-dom';

import AttendeeList from './attendeeList'
import {attendeeListProps} from './dummyProps'

ReactDOM.render(
  <AttendeeList 
      {...attendeeListProps}
    />,
  document.getElementById('root')
);