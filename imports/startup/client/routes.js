import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';

import '../../ui/layouts/MainLayout.js';
import '../../ui/layouts/Events.js';

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