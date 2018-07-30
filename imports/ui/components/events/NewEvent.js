import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { EventSchema, Events } from '../../../api/events/events.js';

import './NewEvent.html';

//console.log(EventSchema);

Template.NewEvent.helpers({
	getEvents() {
            return Events;
        },
    EventSchema() {
    	return EventSchema;
    }
});﻿

Template.NewEvent.events({
	'click .close' : () => {
		Session.set('newEvent', false);
	},
	'submit' : () => {
		Session.set('newEvent', false);
	}
})