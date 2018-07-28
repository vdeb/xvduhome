import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Posts } from '../posts.js';

//Meteor.publish('Posts', function () {
//	return Posts.find({},{sort :{createdAt:-1}});
//});

Meteor.publishComposite('Posts', {
	find() {
		return Posts.find({},{sort :{createdAt:-1}});
	},
	children : [{
		find(post) {
			//Find the post author
			return Meteor.users.find({_id : post.author}, { fields: { username: 1 } });
		}
	}]
});