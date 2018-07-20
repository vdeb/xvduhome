import { _ } from 'meteor/underscore';

import './Event.html';



Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD-MM-YYYY');
});

Template.Event.helpers({
	convertHtml(post) {
		return post.replace(/\r?\n/g, '<br />');
	},
	repondu : function(){
		return (_.contains(this.participants, Meteor.userId()) || _.contains(this.nonParticipants,Meteor.userId()))
	},
	participation : function(){
		return _.contains(this.participants, Meteor.userId())
	},
	listeParticipants : function() {
		return Meteor.users.find( {
			_id : {$in : this.participants}
		})
	},
	listeNonParticipants : function() {
		return Meteor.users.find( {
			_id : {$in : this.nonParticipants}
		})
	},
});

Template.Event.events({
	'click .participation' : function() {
		Meteor.call('addParticipant',this._id,Meteor.userId());
	},
	'click .non-participation' : function() {
		Meteor.call('removeParticipant',this._id,Meteor.userId());
	},
});