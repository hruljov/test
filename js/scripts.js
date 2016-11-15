var ran = Math.floor(Math.random() * 255)+1;
var ran2 = Math.floor(Math.random() * 255)+1;


var w

function resizeDoc(){
  w =  document.getElementById('demo').offsetWidth  ;
  document.getElementById('demo').style.height = w+'px';

}

function myFun() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    w =  document.getElementById('demo').offsetWidth  ;
    document.getElementById('demo').style.height = w+'px';
  var col = scrolled / 20;
  var topq = 80+(scrolled /6);
  var br = scrolled / 20;

if (scrolled == 0){
  ran = Math.floor(Math.random() * 255)+1;
  ran2 = Math.floor(Math.random() * 255)+1;
}
      document.getElementById('demo').style.backgroundColor = 'rgb(' + ran + ',' + ran2 + ',' + col + ')';
      document.getElementById('demo').style.borderRadius = br+'px';
      document.getElementById('demo').style.top = topq+'px'
}
