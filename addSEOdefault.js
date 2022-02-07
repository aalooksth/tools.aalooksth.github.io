(function() {
	try {
		var scraperConfigSettings = new ScrapeSettingsFactory();
        scraperConfigSettings.createScrapeConfigControl();
        e.preventDefault();
        return false;
	} catch (err) {
	    //console.error(err); // will log the error with the error stack
		console.log("ERR.")
	}

	
})();
