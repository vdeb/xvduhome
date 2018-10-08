import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './NavBar.html';

Template.NavBar.events({
	'click .js-logout' : () => {
		Meteor.logout();
	},
});