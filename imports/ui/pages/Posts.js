import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './Posts.html';
import '../components/posts/Post.js';
import '../components/posts/NewPost.js';

import { Posts } from '../../api/posts/posts.js';


Template.Posts.onCreated(function PostsOnCreated() {
	var self = this;
	self.autorun(function() {
		self.subscribe('Posts');
	});
});

Template.Posts.helpers({
	posts: ()=> {
		return Posts.find({});
	},
});﻿

Template.Posts.events({
	'click .new-post' : () => {
		Session.set('newPost', true);
	},
});