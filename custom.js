/* 
 * Pascal Lola
 * Updated 04/10/2015
 * Use as you would like. Feel free to donate at https://cash.me/$tresor
 */

//the line of code below will remove certain "irrelevant" javascript warnings
/*global $:false, jQuery: false, Chart:false, console:false, document:false, window:false, alert:false, location:false, localStorage:false */

//Global Variables
var dataPoints = 4;//the total number of data points
var itemsPerSet = 2;
var minValue = 0;
var maxValue = 100;
var chartColors = ["#008CBA", "#F1C40F"];
var itemLabels = ["Apple", "Samsung"];
var pointLabels = ["Laptops", "Cellphones", "Tablets", "Televisions"];
var myChart;

//function to generate a random integer between a min and a max value.
function getRndInt(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//function that is called to set the random data for every chart data point
function getChartData(min, max) {
    "use strict";
    var chartData = [];//first instatiate the variable, to empty.
    for (var i = 1; i <= dataPoints; i++) {
        chartData.push(getRndInt(min, max));  
    }
    return chartData; 
}

//this is a helper function for getBarData function
function getDataSet (){
    var dtst = [];
    for (var i=0; i<itemsPerSet; i++){
        dtst[i] = {};
        dtst[i].label = itemLabels[i],
        dtst[i].fillColor = convertHex(chartColors[i],70); //base color
        dtst[i].strokeColor = convertHex(chartColors[i],50);//"rgba(" + colors[i] + ", 0.5)",//a darker stroke color of the same
        dtst[i].highlightFill = convertHex(chartColors[i],75);//"rgba(" + colors[i] + ", 0.75)",//another variation of color
        dtst[i].highlightStroke = convertHex(chartColors[i],100);//"rgba(" + colors[i] + ", 1)", //another variation of color
        dtst[i].data = getChartData(minValue, maxValue);
    }
    return dtst;
}

//This is the MAIN FUNCTION for setting the bar chart data. Change this to be used by other chart types.
function getBarData() {
    "use strict";
    //set up chart data
    var data = {};    
    data.labels = pointLabels;
    data.datasets = getDataSet();
    return data;
}
    
//This is the MAIN FUNCTION for setting the bar chart options. Change this to be used by other chart types.
function getBarOptions() {
    "use strict";
    var options = {
        scaleFontColor: "rgba(120,120,120,1)",
        datasetStrokeWidth: 1,
        scaleShowGridLines : true,
        datasetFill : true,
        bezierCurveTension : 0.3,
        bezierCurve : true,
        responsive: true,
    };
    return options;
}
    

function setLineData() {
    "use strict";
    //set up chart data
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    return data;
}

function setLineOptions() {
    "use strict";
    var options = {
        scaleFontColor: "rgba(120,120,120,1)",
        datasetStrokeWidth: 1,
        scaleShowGridLines : true,
        datasetFill : true,
        bezierCurveTension : 0.3,
        bezierCurve : true,
        responsive: true
    };
    return options;
}

function setPieData() {
    "use strict";
    var data = [
        {
            value: 300,
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ];
    return data;
}

function setPieOptions() {
    "use strict";
    var options = {
        scaleFontColor: "rgba(120,120,120,1)",
        datasetStrokeWidth: 1,
        scaleShowGridLines : false,
        datasetFill : true,
        responsive: true
    };
    return options;
}

function setDoughnutData() {
    "use strict";
    var data = [
        {
            value: 300,
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ];
    return data;
}

function setDoughnutOptions() {
    "use strict";
    var options = {
        scaleFontColor: "rgba(120,120,120,1)",
        datasetStrokeWidth: 1,
        scaleShowGridLines : false,
        datasetFill : true,
        responsive: true,
        animateScale: true
    };
    return options;
}


function setRadarData() {
    "use strict";
    var data = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };

    return data;
}

function setRadarOptions() {
    "use strict";
    var options = {
        scaleFontColor: "rgba(120,120,120,1)",
        datasetStrokeWidth: 1,
        scaleShowGridLines : false,
        datasetFill : true,
        responsive: true,
        animateScale: true
    };
    return options;
}

function setPolarAreaData() {
    "use strict";
    var data = [
        {
            value: 300,
            color: "#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 40,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 120,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }

    ];
    return data;
}

function setPolarAreaOptions() {
    "use strict";
    var options = {
        scaleFontColor: "rgba(120,120,120,1)",
        datasetStrokeWidth: 1,
        scaleShowGridLines : false,
        datasetFill : true,
        responsive: true,
        animateScale: true
    };
    return options;
}

//this function is called each time a new tab opens. 
function drawChart(chartType) {
    "use strict";
    var ctx = document.getElementById("chartCanvas").getContext("2d");
    
    if (chartType === "bar") {
        myChart = new Chart(ctx).Bar(getBarData(), getBarOptions());
    } else if (chartType === "line") {
        myChart = new Chart(ctx).Line(setLineData(), setLineOptions());
    } else if (chartType === "pie") {
        myChart = new Chart(ctx).Pie(setPieData(), setPieOptions());
    } else if (chartType === "doughnut") {
        myChart = new Chart(ctx).Doughnut(setDoughnutData(), setDoughnutOptions());
    } else if (chartType === "radar") {
        myChart = new Chart(ctx).Radar(setRadarData(), setRadarOptions());
    } else if (chartType === "polar") {
        myChart = new Chart(ctx).PolarArea(setPolarAreaData(), setPolarAreaOptions());
    } else if (chartType === 'map') {
        alert("map coming soon");
    }
    else{
        
    }

}



function capitalizeFirstLetter(string) {
    "use strict";
    return string.charAt(0).toUpperCase() + string.slice(1);
}


//save the image on button click
$('#download-button').on('click', function (e) {
    saveChartImage(this, "chartCanvas", "bar-chart.png");
    
    //function that converts the chart into a png file and saves it
    function saveChartImage(link, canvasID, filename) {
    "use strict";
    link.href = document.getElementById("chartCanvas").toDataURL("image/png");
    link.download = filename;
    }
});

//when the customize button is clicked, do this
$("#customize-button").on('click', function (e) {
    $('#data-points').tooltip({'trigger': 'focus', 'title': 'How many data points? Enter a number between 2 and 20'});
    $('#items-per-set').tooltip({'trigger': 'focus', 'title': 'How many items or bars in a set? Enter a number between 1 and 5'});
    $('#min-value').tooltip({'trigger': 'focus', 'title': 'What is the minimum value you want for any of your items?'});
    $('#max-value').tooltip({'trigger': 'focus', 'title': 'What is the minimum value you want for any of your items?'});
});
    
//when the save button is clicked, do this
$("#save-button").on('click', function (e) {
    //save the values in the form into variables.
    dataPoints = $('#data-points').val(); 
    itemsPerSet = $('#items-per-set').val();
    minValue = $('#min-value').val();
    maxValue = $('#max-value').val();
    
    //save the item labels..implement a max tag on input
    if($('#x-axis-input').val().length > 0){
            pointLabels = $('#x-axis-input').val().split(',');
            console.log($('#x-axis-input').val());
    }else{//if there is nothing input, then 
        console.log("there is nothing here");   
    }
    
    itemLabels = [];
    $('.item-option').find('input').each(function (i){
        itemLabels[i] = this.value;  
    });
    
    $('.color-btn.selected').each(function (i){
        chartColors[i] = $(this).attr('data-color');
    });

    myChart.destroy();//delete the existing chart 
    drawChart("bar");//Then redraw the chart completely
    //console.log('#x-axis-input').val();
    $("#chartModal").modal('hide');
});

//When the modal window opens, do this
$('#chartModal').on('shown.bs.modal', function () {
    //make sure the values in the input fields match what is currently stored in the variable values.
    $('#data-points').val(dataPoints);
    $('#items-per-set').val(itemsPerSet);
    $('#min-value').val(minValue);
    $('#max-value').val(maxValue); 
    $('#x-axis-input').tagsinput('add', pointLabels.toString());
    
    //the options set in here are not working...the above function works but not this one
    $('#x-axis-input').tagsinput({
        trimValue: true, 
        allowDuplicates: true
    });
    
    //populate all the item names with values from local variable
    $('.item-name input').each(function (i) {
        $(this).val(itemLabels[i]);
    });           
    //populate all the item colors with values from local variable
    $('.colorselector').each(function (i) {
        $(this).colorselector("setColor", chartColors[i]);
    });
    
    //temp fix for updating the max label on x-axis labels input
    $('.x-axis-labels-max-label').text('max ' + $('#data-points').val());

});




//When a tab becomes active, or shown do the following...
$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    "use strict";    
    location.hash = $(e.target).text(); //make sure the correct URL displays in the URL bar
    document.title = "Generate Random " + capitalizeFirstLetter($(e.target).text()) + " Chart"; //update the tab title
    localStorage.setItem('lastTab', e.target.hash);//use localStorage to record the current tab, which will be used on page refresh.
    $('#chartCanvas').remove(); // make sure to first delete any existing canvas elements of name #chartCanvas
    $('.active .chartArea').append('<canvas id="chartCanvas"></canvas>'); //then create a new canvas element with the same name in the active tab

    if ($('#chartCanvas').length) { //if chartCanvas exists, draw a chart on it
        drawChart(e.target.innerHTML); //call drawchart function, telling it which type of chart to draw
    } else {
        document.title = "Generate Random Charts";
    }

});




//when everything has finished loading, do this...consider changing this to document.ready <--nope don't do it!!!
window.onload = function () {
    "use strict";
    //ON REFRESH....go to the last saved tab, the current tab
    var lastTab = localStorage.getItem('lastTab');
    if (lastTab) { //if it exitsts, then
        $('a[href=' + lastTab + ']').tab('show');//show that tab
    } else{
    } 

    
};

//when the user types a new value in url, set the correct tab
window.onhashchange = function (e) {
    if (location.hash) {//if there is some kind of hash value
        $('a[href=' + location.hash + 'Panel]').tab('show');  
    } else{

    }
};

//The following function is to dynamically create and update elements and their values in chart options
var tempItemsPerSet = itemsPerSet;
function onOptionChange(e) {
    "use strict";
    var i,
        delta;
    
    delta = $(e.target).val() - tempItemsPerSet;//how many new input boxes to create
    if (delta > 0) {
        for (i =0; i < delta; i++) {
            $('#customize-form').append('<div class="row item-option">' +
                                            '<div class="col-xs-6 form-group item-name">' +
                                                '<input type="text" class="form-control" value="' + getItemName(tempItemsPerSet) + '">' +
                                            '</div>' +
                                            '<div class="col-xs-6 form-group item-color">' +
                                                '<select class="colorselector">' +
                                                     '<option value="106" data-color="#008CBA">blue</option>' +
                                                     '<option value="87" data-color="#F1C40F">sunflower</option>' +
                                                     '<option value="47" data-color="#1ABC9C">turquoise</option>' +
                                                     '<option value="15" data-color="#E74C3C">alizarin</option>' +
                                                     '<option value="24" data-color="#E67E22">carrot</option>' +
                                                     '<option value="78" data-color="#95A5A6">concrete</option>' +
                                                     '<option value="" data-color="#34495E">wet asphalt</option>' +
                                                     '<option value="" data-color="#9B59B6">amethyst</option>' +
                                                '</select>' +
                                            '</div>' +
                                        '</div>');
            tempItemsPerSet++;
        } 
    } else if (delta < 0) {
        for (i = 0; i < Math.abs(delta); i++) {
            $('.item-option').children('.item-name:last').remove();
            $('.item-option').children('.item-color:last').remove();
            tempItemsPerSet--;
        }        
    } 
    $('.colorselector:last').find('option:nth-child(' + $(e.target).val() + ')').prop('selected','selected'); 
    $('.colorselector').colorselector(); //then re-initialize the colorselector

    function getItemName (i) {
        var item = "Item";
        if (itemLabels[i]){
            return itemLabels[i];
        }
        else{
            return item; 
        }
    }
}

function validate(e) {
    
}

//this function converts a hex to an rgba value. thanks to author of http://jsfiddle.net/ekinertac/3Evx5/1/
function convertHex(hex,opacity){
    hex = hex.replace('#','');
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}


function onXaxisChange(e) {
    $('.x-axis-labels-max-label').text('max ' + $(e.target).val());
}

/*-----------------------------------------NOTES--------------------------------------------------------------------------
dynamically create labels, elements, and color selections
save the values in variable on save

*/

/*-------------------------------------CURRENT BUGS, FIXES, + ENHANCEMENTS------------------------------------------------
done-B100 - Previous pill remains active when user browses using the URL input, or back button (fix by removing active class of event.relatedTarget)
done-E200 - change grid of action buttons on small devices.
E201 - implement maximum allowable tags based on x axis value set
E202 - implement on change event for x axis labels that adds a default x axis value each time on x axis set delta (e.g. Label).
*/



//----------------------------------------------------UNUSED FUNCTIONS--------------------------------------------------------

//When the modal window is hidden, do this
$('#chartModal').on('hidden.bs.modal', function () {
    $('#x-axis-input').tagsinput('removeAll');
});

//when we leave the previous tab, do this.
$('a[data-toggle="pill"]').on('hidden.bs.tab', function (e) {
    "use strict";
});


//this function is called when the save button is clicked
/*function genereateRandomData() {
    var fields = [{
    name: "yearsEmployed",
    type: "Number",
    min: 1,
    max: 30,
    decimals: 0
    }, {
        name: "department",
        type: "Custom List",
        values: ["R+D", "Marketing", "HR"]
    }, {
        name: "dob",
        type: "Date",
        min: "1/1/1950",
        max: "1/1/2000",
        format: "%m/%d/%Y"
    }, {
        name: "address",
        type: "Street Address"
    }];

    var url = 'http://www.mockaroo.com/api/generate.json?count=1000&key=4e962780' +
      '&fields=' + encodeURIComponent(JSON.stringify(fields));

    $.ajax(url, {
    dataType: 'jsonp',
    contentType: 'application/json',
    success: function (data) {
        //console.log('yearsEmployed', data.yearsEmployed);
        //console.log('department', data.department);
        //console.log('dob', data.dob);
        console.log(data);
        }
    });    
}
*/




/*$.getJSON("sample.json", function (jdata) {
    "use strict";
   // console.log(data);
    var amount = [];
    var items = [];
    var dates = [];
    for (var i = 0; i < jdata.length; i++) {
        amount.push(jdata[i].amount); 
        items.push(jdata[i].item);
        dates.push(jdata[i].date);
    }
    
});
*/