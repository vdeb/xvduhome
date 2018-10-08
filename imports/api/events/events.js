import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

import { Images } from '../images/images.js';

export const Events = new Mongo.Collection('Events');

SimpleSchema.extendOptions(['autoform']);

SimpleSchema.setDefaultMessages({
  initialLanguage: 'fr',
  messages: {
    fr: {
      uploadError: '{{value}}', //File-upload
    },
  }
});

export const EventSchema = new SimpleSchema({
	name : {
		type : String,
		label : "Nom"
	},
	desc : {
		type : String,
		label : "Description",
		autoform : {
			type : 'textarea'
		}
	},
	place : {
		type : String,
		label : "Lieu"
	},
	author : {
		type : String,
		label : "Auteur",
		autoValue : function(){
			return this.userId
		},
		autoform : {
			type : 'hidden'
		}
	},
	Date : {
		type : Date,
		label : "Date"
	},
	beginTime : {
		type : String,
		regEx: /^([0-1]\d|2[0-3]):[0-5]\d$/,
		label : "Heure de début",
		autoform : {
			value : '00:00'
		}
	},
	endTime : {
		type : String,
		regEx: /^([0-1]\d|2[0-3]):[0-5]\d$/,
		label : "Heure de fin",
		autoform : {
			value : '00:00'
		}
	},
	isMatch : {
		type : Boolean,
		label : "Match"
	},
	participants :{
		type : Array,
		optional : true,
		label : "participants",
		autoform : {
			type : 'hidden'
		}
	},
	'participants.$' : {
		type : String
	},
	nonParticipants :{
		type : Array,
		optional : true,
		label : "non participants",
		autoform : {
			type : 'hidden'
		}
	},
	'nonParticipants.$' : {
		type : String
	},
	createdAt : {
		type : Date,
		label : "Créé le",
		autoValue : function(){
			return new Date()
		},
		autoform : {
			type : 'hidden'
		}
	}
}, { tracker: Tracker });

Events.attachSchema(EventSchema);