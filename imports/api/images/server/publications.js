import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Images } from '../images.js';

Meteor.publish('files.images.all', function () {
    return Images.collection.find({});
  });