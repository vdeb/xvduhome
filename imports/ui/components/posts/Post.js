import './Post.html';

Template.Post.helpers({
	convertHtml(post) {
		return post.replace(/\r?\n/g, '<br />');
	},
	getAuthor : function() {
		return Meteor.users.findOne( {
			_id : this.author
		});
	},
});