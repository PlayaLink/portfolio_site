import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


import HomePage from '/imports/ui/screens/HomePage.jsx'


Meteor.startup(() => {
  render(<HomePage />, document.getElementById('react-target'));
});
