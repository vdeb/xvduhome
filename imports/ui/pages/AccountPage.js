import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './AccountPage.html';

import { Images } from '../../api/images/images.js';


Template.AccountPage.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('files.images.all');
	});
});