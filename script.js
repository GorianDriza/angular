$(document).ready(function() {
	$('#btnDelete').on('click', function(){
		debugger
		this.remove();
	});
});

var btn = function (id) {
	debugger
	var rowId = id.split('_')[1];
		$('tr#'+rowId).remove();
};