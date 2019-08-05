(function() {
	try {
		var s = document.getElementById("lunch-form");
		s.setAttribute("style", "");
	} catch (err) {
	    //console.error(err); // will log the error with the error stack
		console.log("")
	}
	
	// create DIV element and append to the table cell
	function createCell(cell, text, style='') {
		var div = document.createElement('div'), // create DIV element
		txt = document.createTextNode(text); // create text node
		div.appendChild(txt);                    // append text node to the DIV
		div.setAttribute('style', style);
		cell.appendChild(txt);                   // append DIV to the table cell
	}

	// append column to the HTML table
	function appendColumn() {
		var tbl = document.getElementById('orderTable'), // table reference
			i, total;
		// open loop for each row and append cell
		for (i = 0; i < tbl.rows.length; i++) {
			price = parseFloat(tbl.rows[i].cells[3].innerHTML) ||0;
			unit = parseFloat(tbl.rows[i].cells[2].innerHTML) ||0;
			total += price*unit;
			createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), unit*price,tbl.rows[i].cells[2].getClass());
		}
		createCell(tbl.rows[0].insertCell(tbl.rows[0].cells.length), total,'font-weight: bold;');
	}

	appendColumn();
	
})();
