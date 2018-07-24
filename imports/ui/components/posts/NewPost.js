import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import { Posts } from '../../../api/posts/posts.js';

import './NewPost.html';

Template.NewPost.helpers({
	getPosts() {
            return Posts;
        },
});﻿

Template.NewPost.events({
	'click .close' : () => {
		Session.set('newPost', false);
	}
})