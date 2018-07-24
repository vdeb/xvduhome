import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';

import '../../ui/layouts/MainLayout.js';
import '../../ui/pages/Events.js';
import '../../ui/pages/PastEvents.js';
import '../../ui/pages/Posts.js';

FlowRouter.route('/',{
	name : 'home',
	action(){
		BlazeLayout.render('MainLayout');
		//BlazeLayout.render('MainLayout',{main: 'Recipes'});
	}
});

FlowRouter.route('/evenements',{
	name : 'evenements',
	action(){
		BlazeLayout.render('MainLayout',{main: 'Events'});
	}
});

FlowRouter.route('/evenements_passes',{
	name : 'evenementsPasses',
	action(){
		BlazeLayout.render('MainLayout',{main: 'PastEvents'});
	}
});

FlowRouter.route('/actualites',{
	name : 'actualites',
	action(){
		BlazeLayout.render('MainLayout',{main: 'Posts'});
	}
});