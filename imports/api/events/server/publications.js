import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Events } from '../events.js';


Meteor.publishComposite('Events', {
	find() {
		return Events.find({Date : {$gte : new Date()}},{sort :{Date:1}});
	},
	children : [{
		find(event) {
			//Find all participants and non participants relative to an event
			return Meteor.users.find({
				$or:[{_id : {$in : event.participants}}, {_id: {$in : event.nonParticipants}}]
			},
			{ fields: { username: 1 } })
		}
	}]
});

Meteor.publishComposite('PastEvents', {
	find() {
		return Events.find({Date : {$lt : new Date()}},{sort :{Date:-1}});
	},
	children : [{
		find(event) {
			//Find all participants and non participants relative to an event
			return Meteor.users.find({
				$or:[{_id : {$in : event.participants}}, {_id: {$in : event.nonParticipants}}]
			},
			{ fields: { username: 1 } })
		}
	}]
});