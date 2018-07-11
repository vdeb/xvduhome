import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Events } from './events.js';

Events.allow({
	insert : function(userId, doc) {
		return !!userId;
	},
	update : function(userId, doc) {
		return !!userId;
	}
});

Meteor.methods({
	deleteEvent : function(id) {
		Events.remove(id);
	}
});