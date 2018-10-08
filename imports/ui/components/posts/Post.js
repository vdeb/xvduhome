import { ReactiveDict } from 'meteor/reactive-dict';

import { Posts } from '../../../api/posts/posts.js';
import { Images } from '../../../api/images/images.js';

import './Post.html';

Template.Post.onCreated(function(){
	this.state = new ReactiveDict();
	this.state.setDefault({
    editMode: false,
    deleteMode: false,
  });
});

Template.Post.helpers({
	convertHtml(post) {
		return post.replace(/\r?\n/g, '<br />');
	},
	getAuthor : function() {
		return Meteor.users.findOne( {
			_id : this.author
		});
	},
	editMode : function() {
		return Template.instance().state.get('editMode');
	},
	deleteMode : function() {
		return Template.instance().state.get('deleteMode');
	},
    getPosts() {
    	return Posts;
    },
    getPicture : function() {
		return Images.findOne( {
			_id : this.picture
		}).link();
	},
});

Template.Post.events({
	'click .fa-pencil' : function(event, template){
		template.state.set('editMode',!template.state.get('editMode'));
	},
	'click .fa-trash' : function(){
		Meteor.call('deletePost', this._id)
	},
	'click .btn-primary' : function(event, template){
		template.state.set('editMode',!template.state.get('editMode'));
	},
});
