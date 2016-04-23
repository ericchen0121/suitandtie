Template.messageContainer.events({

	'click input[type=submit]': function(e) {
    var message = $('#msg').val();
    Messages.insert({
    	message, 
    	createdAt: new Date(), // current time
    	userId: Meteor.userId()
    })
  }
})
