//app.js for the Mars Site Vote project.

// By Aaron Filson

//The first version of the project will have the user of the site click
//on an image to vote for where to land a mission to Mars.
var ImgObj = function (pImgFileLoc){
  this.fileNameForImg = pImgFileLoc;
  this.numberOfVotes = 0;
};

//gobal vars

var didReset = true;
var whichSitesNow = [0 , 1];
var imgArray = [];
for (var i = 0; i < imgFileLocations.length; i++) {
  imgArray[i] = new ImgObj(imgFileLocations[i]);
}

var VoteTracker = function() {
  this.findTagOne = document.getElementById('clickOne');
  this.findTagTwo = document.getElementById('clickTwo');
  this.resetP = document.getElementById('resetP');

  this.displayImg = function () {
    whichSitesNow = this.randomPickTwo();

    $('#image1').html("<img src=\'" + imgArray[whichSitesNow[0]].fileNameForImg + "\' alt='The first site to consider' title='This is the first landing site to consider for a mission to Mars. Click on the image to vote in favor.' \>");
    $('#image2').html("<img src=\'" + imgArray[whichSitesNow[1]].fileNameForImg + "\' alt='The first site to consider' title='This is the first landing site to consider for a mission to Mars. Click on the image to vote in favor.' \>");

    $('#image1').on('click', this.handleImgClicks);
    $('#image2').on('click', this.handleImgClicks);

  };
  this.displayImg();
};

VoteTracker.prototype.makeChart = function () {
  var ctx = document.getElementById('voteChart').getContext("2d");
  var data = { //beware, hardcoded to 14 landing sites
    labels: ['Site1', 'Site2', 'Site3', 'Site4', 'Site5', 'Site6', 'Site7', 'Site8','Site9', 'Site10', 'Site11', 'Site12', 'Site13', 'Site14'],
    datasets: [
      {
        label: "Voting Set One, Round One",
        fillColor: "#0d0d0d",
        strokeColor: "#5ab8f3",
        highlightFill: "#a0e3f2",
        highlightStroke: "#2a558c",
        data: []
      },
    ]
  };
  var outgoing = this.populateChartData(data);
  var options = {};
  var voteChart = new Chart(ctx).Bar(outgoing, options);
};

VoteTracker.prototype.populateChartData = function (pData) {
  for (var i = 0; i < imgArray.length; i++) {
    pData.datasets[0].data[i] = imgArray[i].numberOfVotes;
  };
  return pData;
}

VoteTracker.prototype.handleImgClicks = function (event) {
  var tagHandle = (event.currentTarget.parentElement.id == 'clickOne') ? 0 : 1;
  var ser = whichSitesNow[tagHandle];
  if(didReset) {
    imgArray[ser].numberOfVotes++;
    didReset = false;
    event.currentTarget.parentElement.className = 'highlight';
  }
  raiseTheChartFlag();
  handleTheReset(event);
};

VoteTracker.prototype.randomPickTwo = function () {
  var j = Math.ceil(Math.random()*(imgFileLocations.length - 1));
  var k;
  do{
    var loop = false;
    if ((k = (Math.floor(Math.random()*(imgFileLocations.length)))) == j) {
      loop = true; //if they match, loop and try again.
    } else {
      return [j, k]; //return the two indexes of random sites to land at.
    }
  } while (loop);
};

VoteTracker.prototype.storeData = function (ev) {
  localStorage.setItem('superKey', JSON.stringify(imgArray));
};

VoteTracker.prototype.retrieveData = function(ev) {
  var temp = localStorage.getItem('superKey');
  if(temp != 'null') {
    imgArray = JSON.parse( temp );
  }
  raiseTheChartFlag();
};

VoteTracker.prototype.resetData = function (ev){
  $('#confirmButton').removeClass('hidden');
  $('#confirmButton').addClass(null);
  $('#cancel').removeClass('hidden');
  $('#cancel').addClass(null);
};

VoteTracker.prototype.confirmData = function (ev) {
  localStorage.setItem('superKey', 'null');
  $('#confirmButton').addClass('hidden');
  $('#cancel').addClass('hidden');
};

VoteTracker.prototype.cancelReset = function (ev) {
  $('#confirmButton').addClass('hidden');
  $('#cancel').addClass('hidden');
};

function handleTheReset (event) {
  didReset = true;
  $('#clickOne').html(null);
  $('#clickOne').addClass(null);
  $('#clickTwo').html(null);
  $('#clickTwo').addClass(null);
  pageOneTracker.displayImg();
}

function raiseTheChartFlag() {
  pageOneTracker.makeChart();
}

//make the object, it calls all of the other constructors
var pageOneTracker = new VoteTracker();
//add listeners to the elements we want to get events from
$(pageOneTracker).on('click', pageOneTracker.handleImgClicks);
//$(pageOneTracker).on('click', pageOneTracker.handleImgClicks);

$('#storeButton').on('click', pageOneTracker.storeData);
$('#retrieveButton').on('click', pageOneTracker.retrieveData);
$('#resetButton').on('click', pageOneTracker.resetData);
$('#confirmButton').on('click', pageOneTracker.confirmData);
$('#cancel').on('click', pageOneTracker.cancelReset);
