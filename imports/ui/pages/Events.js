import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './Events.html';
import '../components/events/Event.js';
import '../components/events/NewEvent.js';

import { Events } from '../../api/events/events.js';


Template.Events.onCreated(function EventstOnCreated() {
	var self = this;
	self.autorun(function() {
		self.subscribe('Events');
		self.subscribe('files.images.all');
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