Template.messageContainer.events({ 
	'submit form': function(e) {
    e.preventDefault();

		var commentaryAttr = {
			commentary: $(e.target).find('[id=msg]').val()
		};

		Meteor.call('commentaryInsert', commentaryAttr, function (error, result) {
			if(error){
				return alert(error.reason)
			}
		})

  //   Router.go('postPage', post);
  }
});