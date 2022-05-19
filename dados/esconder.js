var btn = document.getElementById('btn-divo');
var container = document.querySelector('.esconder');
var btn2 = document.getElementById('btn-div2');
var container2 = document.querySelector('.esconder2');
var btn3 = document.getElementById('btn-div3');
var container3 = document.querySelector('.esconder3');
var btn4 = document.getElementById('btn-div4');
var container4 = document.querySelector('.esconder4');
var btn5 = document.getElementById('btn-div5');
var container5 = document.querySelector('.esconder5');
btn.addEventListener('click', function() {
    
  if(container.style.display === 'block') {
      container.style.display = 'none';
  } else {
      container.style.display = 'block';
  }
});
btn2.addEventListener('click', function() {
    
  if(container2.style.display === 'block') {
    container2.style.display = 'none';
} else {
    container2.style.display = 'block';
}
});
btn3.addEventListener('click', function() {
    
  if(container3.style.display === 'block') {
    container3.style.display = 'none';
} else {
    container3.style.display = 'block';
}
});
btn4.addEventListener('click', function() {
    
  if(container4.style.display === 'block') {
    container4.style.display = 'none';
} else {
    container4.style.display = 'block';
}
});
btn5.addEventListener('click', function() {
    
  if(container5.style.display === 'block') {
    container5.style.display = 'none';
} else {
    container5.style.display = 'block';
}
});