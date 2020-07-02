var nomeAPi= "MOSS";
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);


function drawCurveTypes() {
    var data = google.visualization.arrayToDataTable([
                 ['Tempo(min)', 'Status'],
                 [0, 0]
           ]);
    

                     var options = {
                 title: 'Status API '+ nomeAPi,
                 
                 height: 480,
    
                 hAxis: {
                     title: "Tempo(min)",
                     minValue: 0
                 },
                 vAxis: {
                     title: 'Status',
                     maxValue: 0
                 },
                 series: {
                    0: {curveType: 'function',
                   
                }, 
                  },
                    'backgroundColor': {
                        'fill': '#FFFFFF',
                        'opacity': 59,
                        
                        
                     }
                  
             }
             

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    // chart.draw(data, options);
    var index = 0;


 if (index > 10) {
     data.splice(index - 10, 1)
 } else {
     setInterval(() => {
         var random = Math.round(Math.random()*500);
        
         data.addRow([index, random]);
         chart.draw(data, options);
         index++;

     }, 1000)
  }
}
  