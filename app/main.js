'use strict';

// expose jQuery for jquery_ujs and React for react_ujs
require('expose?jQuery!expose?$!jquery');
require('expose?React!react/addons');
require('bootstrap');
require('babel/polyfill');

//libs
import $     from 'jquery';
import React from 'react/addons';
import _     from 'lodash';

//modules
import Home  from './home';

$(document).ready(function() {
  React.render(React.createElement(Home), document.getElementById('route'));
});


