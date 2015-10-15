//app.js for the Mars Site Vote project.

// By Aaron Filson

//The first version of the project will have the user of the site click
//on an image to vote for where to land a mission to Mars.
var ImgObj = function (pImgFileLoc){
  this.fileNameForImg = pImgFileLoc;
  this.numberOfVotes = 0;
};

var imgFileLocations = [
"img/658668main_pia15685-full_full.jpg",
"img/658682main_pia15686_full.jpg",
"img/667877main_Grotzinger-1PIA15690_800-600.jpg",
"img/675225main_pia16029-43_800-600.jpg",
"img/676026main_pia16052-color-43_800-600.jpg",
"img/676039main_pia16053-color-43_800-600.jpg",
"img/678276main_pia16077-43_800-600.jpg",
"img/734386main_pia16768-43_800-600.jpg",
"img/PIA17766-800x600.jpg",
"img/PIA17946-800x600.jpg",
"img/PIA18083-800x600.jpg",
"img/PIA19803-800x600.jpg",
"img/PSP_008579_9020_descent_800-600.jpg",
"img/glacialcraters_mro.jpg"
];
//gobal vars etc
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
    this.point1 = this.findTagOne.appendChild(document.createElement('div'));
    this.point2 = this.findTagTwo.appendChild(document.createElement('div'));
    this.point1.innerHTML = "<img src=\'" + imgArray[whichSitesNow[0]].fileNameForImg + "\' alt='The first site to consider' title='This is the first landing site to consider for a mission to Mars. Click on the image to vote in favor.' \>";
    this.point2.innerHTML = "<img src=\'" + imgArray[whichSitesNow[1]].fileNameForImg + "\' alt='The second site to consider' title='This is the second landing site to consider for a mission to Mars. Click on the image to vote in favor.' \>";
    this.point1.addEventListener('click', this.handleImgClicks);
    this.point2.addEventListener('click', this.handleImgClicks);

  };
  this.displayImg();
};

VoteTracker.prototype.makeChart = function () {
  var ctx = document.getElementById('voteChart').getContext("2d");
  var data = { //beware, hardcoded to 14 landing sites
    labels: ['site1', 'site2', 'site3', 'site4', 'site5', 'site6', 'site7', 'site8','site9', 'site10', 'site11', 'site12', 'site13', 'site14'],
    datasets: [
      {
        label: "Voting Set One, Round One",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
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

function handleTheReset (event) {
  didReset = true;
  document.getElementById('clickOne').innerHTML = null;
  document.getElementById('clickOne').className = null;
  document.getElementById('clickTwo').innerHTML = null;
  document.getElementById('clickTwo').className = null;

  pageOneTracker.displayImg();
}

function raiseTheChartFlag() {
  pageOneTracker.makeChart();
}

//make the object, it calls all of the other constructors
var pageOneTracker = new VoteTracker();

pageOneTracker.point1.addEventListener('click', pageOneTracker.handleImgClicks);
pageOneTracker.point2.addEventListener('click', pageOneTracker.handleImgClicks);

