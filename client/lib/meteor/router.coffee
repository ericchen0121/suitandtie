# --------------- ROUTES --------------
#
Router.route '/', ->
  @render 'lobbyLayout'

Router.route '/messages', {name: 'chatterLayout'}, ->
	@render 'messagesLayout'