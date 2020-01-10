 //https://www.the-art-of-web.com/css/infinite-photo-carousel/
 // Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.
  
  document.addEventListener("DOMContentLoaded", function() {

    var rotateComplete = function() {
      target.style.webkitAnimationName = "";
      target.insertBefore(arr[arr.length-1], arr[0]);
      setTimeout(function(el) {
        el.style.webkitAnimationName = "rotator";
      }, 0, target);
    };

    var target = document.getElementById("rotator");
    var arr = target.getElementsByTagName("a");

    target.addEventListener("webkitAnimationEnd", rotateComplete, false);

  }, false);


    var rotateComplete = function() {
    with(target.style) {
      webkitAnimationName = MozAnimationName = msAnimationName = "";
    }
    target.insertBefore(arr[arr.length-1], arr[0]);
    setTimeout(function(el) {
      with(el.style) {
        webkitAnimationName = MozAnimationName = msAnimationName = "rotator";
      }
    }, 0, target);
  };

  var target = document.getElementById("rotator");
  var arr = target.getElementsByTagName("a");

  target.addEventListener("webkitAnimationEnd", rotateComplete, false);
  target.addEventListener("animationend", rotateComplete, false);
  target.addEventListener("MSAnimationEnd", rotateComplete, false);