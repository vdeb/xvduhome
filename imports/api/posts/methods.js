import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Posts } from './posts.js';

Posts.allow({
	insert : function(userId, doc) {
		return !!userId;
	},
	update : function(userId, doc) {
		return !!userId;
	}
});