(function() {
	try {
		var s = document.getElementById("lunch-form");
		s.setAttribute("style", "");
	} catch (err) {
	    console.error(err); // will log the error with the error stack
	}
	
	// create DIV element and append to the table cell
	function createCell(cell, text, style) {
		var div = document.createElement('div'), // create DIV element
			txt = document.createTextNode(text); // create text node
		div.appendChild(txt);                    // append text node to the DIV
		div.setAttribute('class', style);        // set DIV class attribute
		div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
		cell.appendChild(div);                   // append DIV to the table cell
	}

	// append column to the HTML table
	function appendColumn() {
		var tbl = document.getElementById('orderTable'), // table reference
			i;
		// open loop for each row and append cell
		for (i = 0; i < tbl.rows.length; i++) {
			price = parseInt(tbl.rows[i].cells[3].innerHTML) ||0;
			unit = parseInt(tbl.rows[i].cells[2].innerHTML) ||0;
			
			console.log(test);
			createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), unit*price,'col');
		}
	}

	appendColumn();
	
})();
