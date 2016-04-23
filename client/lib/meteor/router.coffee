# --------------- ROUTES --------------
#
Router.route '/', ->
  @render 'lobbyLayout'

Router.route 'profile', ->
	@render 'addToProfile'