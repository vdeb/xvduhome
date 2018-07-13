import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Events } from '../../api/events/events.js';

import './Event.js';

import './PastEvents.html';


Template.PastEvents.onCreated(function EventstOnCreated() {
	var self = this;
	self.autorun(function() {
		self.subscribe('PastEvents');
	});
	
});

Template.PastEvents.helpers({
	events: ()=> {
		return Events.find({});
	},
	getEvents() {
            return Events;
        },
});﻿