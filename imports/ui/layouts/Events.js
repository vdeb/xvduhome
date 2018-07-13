import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Events } from '../../api/events/events.js';

import './Event.js';
import './NewEvent.js';

import './Events.html';


Template.Events.onCreated(function EventstOnCreated() {
	var self = this;
	self.autorun(function() {
		self.subscribe('Events');
	});
	
});

Template.Events.helpers({
	events: ()=> {
		return Events.find({});
	}
});﻿

Template.Events.events({
	'click .new-event' : () => {
		Session.set('newEvent', true);
	},
});