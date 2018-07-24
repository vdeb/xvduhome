import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Posts } from '../posts.js';

Meteor.publish('Posts', function () {
	return Posts.find({},{sort :{createdAt:-1}});
});