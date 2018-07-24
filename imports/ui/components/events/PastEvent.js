import { _ } from 'meteor/underscore';

import { Events } from '../../../api/events/events.js';

import './PastEvent.html';
import './Participant.html';


Template.registerHelper('formatDate', function(date) {
	return moment(date).format('DD-MM-YYYY');
});

Template.PastEvent.helpers({
	convertHtml(post) {
		return post.replace(/\r?\n/g, '<br />');
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
    getEvents() {
            return Events;
        },
});