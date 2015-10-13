//app.js for the Mars Site Vote project.
// By Aaron Filson

//The first version of the project will have the user of the site click
//on an image to vote for where to land a mission to Mars.

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
var didReset = true;

var imgObj = function (pImgFileLoc){
this.fileNameForImg = pImgFileLoc;
this.numberOfVotes = null;
};
//arg
var whichSitesNow = [0 , 1];
var imgArray = [];
for (var i = 0; i < imgFileLocations.length; i++) {
  imgArray[i] = new imgObj(imgFileLocations[i]);
}

function voteTracker () {
  this.findTagOne = document.getElementById('clickOne');
  this.findTagTwo = document.getElementById('clickTwo');
  this.resetP = document.getElementById('resetP');

  this.randomPickTwo = function ( ) {
    var j = Math.ceil(Math.random()*(imgFileLocations.length - 1));
    var k;
    do{
      var loop = false;
      if ((k = (Math.floor(Math.random()*(imgFileLocations.length - 1)))) == j) {
        loop = true; //if they match, loop and try again.
      } else {
        return [j, k]; //return the two indexes of random sites to land at.
      }
    } while (loop);
  };



  this.displayImg = function () {
    whichSitesNow = this.randomPickTwo();
    this.point1 = this.findTagOne.appendChild(document.createElement('div'));
    this.point2 = this.findTagTwo.appendChild(document.createElement('div'));
    console.log('this is where images should get sent to page. index is :' + whichSitesNow[0] + ", " + whichSitesNow[1]);
    this.point1.innerHTML = "<img src=\'" + imgArray[whichSitesNow[0]].fileNameForImg + "\' alt='The first site to consider' title='This is the first landing site to consider for a mission to Mars. Click on the image to vote in favor.' \>";

    this.point2.innerHTML = "<img src=\'" + imgArray[whichSitesNow[1]].fileNameForImg
     + "\' alt='The second site to consider' title='This is the second landing site to consider for a mission to Mars. Click on the image to vote in favor.' \>";
  this.point1.addEventListener('click', this.handleClickOnOne);
this.point2.addEventListener('click', this.handleClickOnTwo);


  };

  this.displayImg();

  this.handleClickOnOne = function (event){
    console.log('in the handleClickOnOne - ');
    //add to the counter for the landing site
    var ser = whichSitesNow[0];
    if (didReset) {
      imgArray[ser].numberOfVotes++;
      didReset = false;
    }

    console.log('votes is : ' + imgArray[ser].numberOfVotes);

    //highlight the image


  };

  this.handleClickOnTwo = function (event){


    console.log('in the handleClickOnTwo - ');
    var ser = whichSitesNow[1];

    //add to the counter for the landing site
    if (didReset) {
      imgArray[ser].numberOfVotes++;
      didReset = false;
    }
    console.log('votes is : ' + imgArray[ser].numberOfVotes);

    //highlight the site that was voted for

  };


};

function handleTheReset (event) {
  //call the display function
  console.log('should now reset');
  didReset = true;
  document.getElementById('clickOne').innerHTML = null;
  document.getElementById('clickTwo').innerHTML = null;
  pageOneTracker.displayImg();

}


//make the object, it calls all of the other constructors
var pageOneTracker = new voteTracker();

//attach the listeners
pageOneTracker.point1.addEventListener('click', pageOneTracker.handleClickOnOne);
pageOneTracker.point2.addEventListener('click', pageOneTracker.handleClickOnTwo);
pageOneTracker.resetP.addEventListener('click', handleTheReset);
