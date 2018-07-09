import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema'

export const Events = new Mongo.Collection('Events');

SimpleSchema.extendOptions(['autoform']);