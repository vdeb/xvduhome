import './routes.js';
import './accounts-config.js';

if (Meteor.isClient) {
  Meteor.subscribe('files.images.all');
}
