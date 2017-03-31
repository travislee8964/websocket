define(
	"main",
	[
		"MessageList"
	],
	function(MessageList) {
		var ws = new WebSocket(('https:' === document.location.protocol ? 'wss://' : 'ws://') + window.location.host + '/entry');
		var list = new MessageList(ws);
		ko.applyBindings(list);
	}
);
