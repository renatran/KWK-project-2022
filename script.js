//code for the index.html page (welcome page)

var arrow = $('strong');
var poppyWelcome = $('.poppyWelcome');
var message = $('.message');
var button = $('.change-background');
var poppysRoom = $('.poppys-room');

button.on("click", changeBackground);

function changeBackground() {
  var colors = ["#e8aaac", "#545363", "#6686ac"];
  var random = Math.floor(Math.random() * 3);
  poppysRoom.css("background-color", colors[random]);
}

arrow.on("click", changeText);

function changeText() {
  poppyWelcome.text("Take a look around my room! Different objects are clickable and will lead you to different pages. The objects typically correspond to a related theme of the page, for example: bookshelf = information page, wardrobe = fashion inspiration, etc! Have a good time, and if you need anything, I'll be there :D");
  
}

//code for the community page
var addReviewButton = $('.addReviewButton');
var reviewContainer = $('.reviewContainer');

addReviewButton.on("click", addReview);


function addReview (event) {
  
  event.preventDefault(); 
  var name = $('.name').val(); //user's name
  var email = $('.email').val(); //user's email lol
  var userReview = $('.userReview').text(); //whatever they wrote lmao
  var date = $('.date').val(); //day obvs

  if(userReview.length === 0 && name.length === 0) {
    alert("A review is required! Please do write one.");
  } else if (userReview.length === 0 && name !=0) {
    alert("A review is required! Please do write one.");
  } else if (userReview.length != 0 && name.length === 0) {
    reviewContainer.append(`
    <div class= "newReviewCard">
      <h2 class="name">Anonymous</h2>
      <p class="date">${date}</p>
      <p class="email">${email}</p>
      <p class="newUserReview">${userReview}</p>
      <button class="deleteButton">Delete Review</button>
    </div>
  `);
  } else {
    reviewContainer.append(`
    <div class="newReviewCard">
      <h2 class="name">${name}</h2>
      <p class="date">${date}</p>
      <p class="email">${email}</p>
      <p class="newUserReview">${userReview}</p>
      <button class="deleteButton">Delete Review</button>
    
    </div>
  `); 
  }
}

reviewContainer.on("click",deleteFunction);
function deleteFunction(){
  if (event.target.className === "deleteButton") {
    event.target.parentNode.remove();
  }
}

//code for the information page
var next = $('.book-next');

//when user clicks the next arrow:
next.on("click", turnPage);

function turnPage() {
  var images = ["https://cdn.discordapp.com/attachments/984929824491581530/986482354325450752/1.png", "https://cdn.discordapp.com/attachments/984929824491581530/986482354090573855/2.png", "https://cdn.discordapp.com/attachments/984929824491581530/986482353876635668/3.png", "https://cdn.discordapp.com/attachments/984929824491581530/986482353658535977/4.png"]; //array of image srcs
  var current = $('.book-image'); //get the current image shown
  var currentsrc = current.attr('src'); //get the current image src
  var currentindex = images.indexOf(currentsrc); //check which image in the array is currently showing
  if (currentindex === 3) {
    current.attr('src', "https://cdn.discordapp.com/attachments/984929824491581530/986482354325450752/1.png");
  } //if the current image is the last image in the array, go back to the beginning
  else {
    currentindex++;
    var nextsrc = images[currentindex];
    current.attr('src', nextsrc);
  } //if the current image is any other image (not the last image), go to the next image
}

//code for poppys game
var true1 = $('.true1');
var false1 = $('.false1');
var poppyAppear = $('.poppyAppear'); //containerr

true1.on("click", correctAnswer1);
false1.on("click", falseAnswer1);

function correctAnswer1() {
  if (event.target.className === "true1"){
    poppyAppear.append(`
  <img src="https://media.discordapp.net/attachments/984929824491581530/986106009317679124/Capture_2.png">
  <img class="q1-image" src="https://cdn.discordapp.com/attachments/769687082066116608/987056016342548530/q1text.png">
`);
 } 
}

function falseAnswer1() {
  poppyAppear.append(`
  <img src="https://media.discordapp.net/attachments/984929824491581530/986106009317679124/Capture_2.png">
    <img class="q1-image" src="https://cdn.discordapp.com/attachments/769687082066116608/987058669852168202/q1wrongtext.png">
`);
}
  

var true2 = $('.true2');
var false2 = $('.false2');
var poppyAppear2 = $('.poppyAppear2');

true2.on("click", correctAnswer2);
false2.on("click", falseAnswer2);

function correctAnswer2() {
    poppyAppear2.append(`
    <img src="https://media.discordapp.net/attachments/984929824491581530/986106009317679124/Capture_2.png">
    <img class="q1-image" src="https://cdn.discordapp.com/attachments/769687082066116608/987064050053677176/q2text.png">
`);
} 


function falseAnswer2() {
    poppyAppear2.append(`
    <img src="https://media.discordapp.net/attachments/984929824491581530/986106009317679124/Capture_2.png">
    <img class="q1-image" src="https://cdn.discordapp.com/attachments/769687082066116608/987065474607099954/q2wrongtext.png">
`);
}

var true3 = $('.true3');
var false3 = $('.false3');
var poppyAppear3 = $('.poppyAppear3');

true3.on("click", correctAnswer3);
false3.on("click", falseAnswer3);

function correctAnswer3() {
  poppyAppear3.append(`
  <img src="https://media.discordapp.net/attachments/984929824491581530/986106009317679124/Capture_2.png">
  <img class="q1-image" src="https://cdn.discordapp.com/attachments/769687082066116608/987074301926723634/q3text.png">
`);
}

function falseAnswer3 () {
  poppyAppear3.append(`
  <img src="https://media.discordapp.net/attachments/984929824491581530/986106009317679124/Capture_2.png">
  <img class="q1-image" src="https://cdn.discordapp.com/attachments/769687082066116608/987075001956040774/q3wrongtext.png">
`)
}
