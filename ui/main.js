console.log('Loaded!');

//change the text of the main-text.div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//move the image
var img = document.getElementById('img');
img.onClick = function () {
  img.style.marginLeft = '100px';  
};