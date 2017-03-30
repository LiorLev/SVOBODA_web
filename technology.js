function openExplorer() {
		var thePath = 'desktop';
		window.open('file://' + thePath, 'explorer');
	}


	$('#openFile').click(function() {
    $('input[type="file"]').click();
});
