import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from "/imports/ui/screens/MainLayout.jsx"



import HomePage from '/imports/ui/screens/HomePage.jsx';
FlowRouter.route('/', {
  name: 'homePage',
  action() {
    mount(MainLayout, {content: <HomePage />}
    );
  }
});


import Journalism from '/imports/ui/screens/Journalism.jsx'
FlowRouter.route('/journalism-portfolio', {
  name: 'journalismPortfolio',
  action() {
    mount(MainLayout, {content: <Journalism />}
    );
  }
});

import Contact from '/imports/ui/screens/Contact.jsx'
FlowRouter.route('/contact', {
  name: 'contact',
  action() {
    mount(MainLayout, {content: <Contact />}
    );
  }
});

import About from '/imports/ui/screens/About.jsx'
FlowRouter.route('/about', {
  name: 'about',
  action() {
    mount(MainLayout, {content: <About />}
    );
  }
});
