import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema';

export const Events = new Mongo.Collection('Events');

SimpleSchema.extendOptions(['autoform']);

EventSchema = new SimpleSchema({
	name : {
		type : String,
		label : "Nom"
	},
	desc : {
		type : String,
		label : "Description"
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
});

Events.attachSchema(EventSchema);