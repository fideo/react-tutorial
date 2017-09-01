import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import {App} from '../imports/client/App'
import {Mio} from '../imports/client/Mio'

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

Meteor.startup(() => {
  render(<Mio />, document.getElementById('render-target2'));
});
