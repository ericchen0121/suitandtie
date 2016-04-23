# This sets up a reactive join on commentaries and users
# https://atmospherejs.com/reywood/publish-composite
#
Meteor.publish 'messages', ->
  Messages.find()
