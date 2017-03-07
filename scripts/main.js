var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/skill.jpg') {
      myImage.setAttribute ('src','images/skill22.jpg');
    } else {
      myImage.setAttribute ('src','images/skill.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Пожалуйста, вветите своё имя.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Ты крут, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Ты крут, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}