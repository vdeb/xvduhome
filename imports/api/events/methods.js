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
	},
	addParticipant : function(id,userId) {
		Events.update(id, {
			$push : {
				participants: userId
			},
			$pull : {
				nonParticipants: userId
			}
		})
	},
	removeParticipant : function(id,userId) {
		Events.update(id, {
			$pull : {
				participants: userId
			},
			$push : {
				nonParticipants : userId
			}
		});
	},
});