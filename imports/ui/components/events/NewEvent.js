import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Events } from '../../../api/events/events.js';

import './NewEvent.html';


Template.NewEvent.helpers({
	getEvents() {
            return Events;
        },
});﻿

Template.NewEvent.events({
	'click .close' : () => {
		Session.set('newEvent', false);
	}
})