import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Events } from '../../api/events/events.js';

import './Event.js';

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
	},
	getEvents() {
            return Events;
        },
});﻿