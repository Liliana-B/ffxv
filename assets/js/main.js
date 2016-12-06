var url = '';

var options = {

	twitter: {
		text: 'Check out this awesome shot! #FFXV #Prompto',
		via: "Prompto's Photoblog"
	},

	facebook : true,
	googlePlus : true
};

$('.socialShare').shareButtons(url, options);
