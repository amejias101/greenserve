// JavaScript Document
google.load('visualization', '1', {packages: ['corechart']});

function graph_cfl() {
// Create and populate the data table.
	var data = new google.visualization.DataTable();
	var raw_data = [['lightbulb lifetime', 656],
				['yearly', 119]];
											
	var years = [''];
				
	data.addColumn('string', 'Year');


	for (var i = 0; i  < raw_data.length; ++i) {
	  data.addColumn('number', raw_data[i][0]);    
	}

	data.addRows(years.length);

	for (var j = 0; j < years.length; ++j) {    
		data.setValue(j, 0, years[j].toString());    
	}
	
	for (var i = 0; i  < raw_data.length; ++i) {
		for (var j = 1; j  < raw_data[i].length; ++j) {
			data.setValue(j-1, i+1, raw_data[i][j]);    
		}					  
	}

// Create and draw the visualization.
	new google.visualization.ColumnChart(document.getElementById('graph_cfl')).
		draw(data,
			 {width:420, height:325,legend:'bottom',vAxis:{format:'$'},toolTip:{format:'$'},
			  hAxis: {'title': "Based on $.10 per kWh and 4 hours use per day. Actual savings will vary and may be higher than shown."},chartArea:{top:40,height:"60%",width:'80%'}}
	);
}
	  
function graph_gpm() {
	// Create and populate the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Minutes');
	data.addColumn('number', 'Regular Faucet');
	data.addColumn('number', 'Low-Flow Faucet');
	data.addRow(["0", 0, 0]);
	data.addRow(["1", 5, 2.5]);
	data.addRow(["2", 10, 5]);
	data.addRow(["3", 15, 7.5]);
	data.addRow(["4", 20, 10,]);
	data.addRow(["5", 25, 12.5]);
	data.addRow(["6", 30, 15]);
	data.addRow(["7", 35, 17.5]);
	data.addRow(["8", 40, 20]);
	data.addRow(["9", 45, 22.5]);
	data.addRow(["10",50, 25]);
	
	
	// Create and draw the visualization.
	new google.visualization.LineChart(document.getElementById('graph_gpm')).
		draw(data,
			 {width:420, height:325,legend:'bottom',vAxis:{title:'Gallons'},toolTip:{format:'$'},
			  hAxis: {'title': "Based on $.10 per kWh and 4 hours use per day. Actual savings will vary and may be higher than shown."},chartArea:{top:40,height:"60%",width:'80%'}}
	);
}

google.setOnLoadCallback(graph_cfl);
google.setOnLoadCallback(graph_gpm);