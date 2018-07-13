import { Events } from '../../api/events/events.js';

import './NewEvent.html';


Template.NewEvent.helpers({
	getEvents() {
            return Events;
        },
});﻿

Template.NewEvent.events({
	'click .close-button' : () => {
		Session.set('newEvent', false);
	}
})