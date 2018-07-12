import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Events } from '../events.js';

Meteor.publish('Events', function () {
	return Events.find({Date : {$gte : new Date()}},{sort :{Date:1}});
});