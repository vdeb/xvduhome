import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema';

export const Posts = new Mongo.Collection('Posts');

SimpleSchema.extendOptions(['autoform']);

PostSchema = new SimpleSchema({
	title : {
		type : String,
		label : "Titre"
	},
	subtitle : {
		type : String,
		label : "Sous-titre (optionnel)",
		optional : true
	},
	content : {
		type : String,
		label : "Contenu",
		autoform : {
			type : 'textarea'
		}
	},
	author : {
		type : String,
		label : "Auteur",
		autoValue : function(){
			return this.userId
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

Posts.attachSchema(PostSchema);