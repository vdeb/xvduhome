import { _ } from 'meteor/underscore';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';


import { Events } from '../../../api/events/events.js';


import './Event.html';
import './Participant.html';

Template.Event.onCreated(function(){
	this.state = new ReactiveDict();
	this.state.setDefault({
    editMode: false,
    deleteMode: false,
  });
});


Template.registerHelper('formatDateDay', function(date) {
	return moment(date).format('DD');
});

Template.registerHelper('formatDateMonth', function(date) {
	var date = moment(date);
	date.locale('fr');
	console.log(date.locale());
	return date.format('MMM');
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
	editMode : function() {
		return Template.instance().state.get('editMode');
	},
	deleteMode : function() {
		return Template.instance().state.get('deleteMode');
	},
    updateEventId : function() {
        return this._id;
    },
    getEvents() {
            return Events;
        },
});

Template.Event.events({
	'click .participation' : function() {
		Meteor.call('addParticipant',this._id,Meteor.userId());
	},
	'click .non-participation' : function() {
		Meteor.call('removeParticipant',this._id,Meteor.userId());
	},
	'click .fa-pencil' : function(event, template){
		template.state.set('editMode',!template.state.get('editMode'));
	},
	'click .fa-trash' : function(){
		Meteor.call('deleteEvent', this._id)
	},
	'click .btn-primary' : function(event, template){
		template.state.set('editMode',!template.state.get('editMode'));
	},
});