$(document).ready(function() {

	var vm = new Vue({
    el: '#page-top',
    data: {
        windowWidth: $(window).width()
    }
	});

	 //Check for window width resize
	$(window).on('resize', function() {
	    vm.windowWidth = $(window).width();
	});
});