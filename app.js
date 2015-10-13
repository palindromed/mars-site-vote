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
"img/filenamelist.txt",
"img/glacialcraters_mro.jpg",
]

var voteTracker = function () {

  this.imgArray = [];
  for (var i = 0; i < imgFileLocations.length; i++) {
    this.imgArray[i] = new imgObj(imgFileLocations[i]);
  }
  this.randomPickTwo = function () {
    var j = Math.ceil(Math.random()*imgFileLocations.length);
    do{
      var loop = false;
      if (Math.floor(Math.random()*imgFileLocations.length) == j) {
        loop = true; //if they match, loop and try again.
      } else {
        return [j, k]; //return the two indexes of random sites to land at.
      }
    } while (loop);
  }
}

var imgObj = function (pImgFileLoc){
this.fileNameForImg = pImgFileLoc;
this.numberOfVotes = 0;

}
