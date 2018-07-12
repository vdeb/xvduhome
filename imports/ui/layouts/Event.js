import './Event.html';



Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD-MM-YYYY');
});

Template.Event.helpers({
	convertHtml(post) {
		return post.replace(/\r?\n/g, '<br />');
	},
});