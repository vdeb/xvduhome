import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

import { Images } from '../images/images.js';

export const Posts = new Mongo.Collection('Posts');

SimpleSchema.extendOptions(['autoform']);

SimpleSchema.setDefaultMessages({
	initialLanguage: 'fr',
	messages: {
		fr: {
      uploadError: '{{value}}', //File-upload
  },
}
});

PostSchema = new SimpleSchema({
	title : {
		type : String,
		label : "Titre"
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
	},
	picture: {
		type: String,
		label : 'Photo',
		optional : true,
		autoform: {
			afFieldInput: {
				type: 'fileUpload',
				collection: 'Images',
				//uploadTemplate: 'uploadField', // <- Optional
        		//previewTemplate: 'myFilePreview', // <- Optional
        	}
        }
    }
}, { tracker: Tracker });

Posts.attachSchema(PostSchema);