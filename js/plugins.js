// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

/*Inview Animations - Objects in Viewport*/
inView.offset(window.outerHeight/10);
inView('.aniFromTopDelay').on('enter', fromTopDelay);
inView('.aniFromLeftDelay').on('enter', fromLeftDelay);
inView('.aniZoomIn').on('enter', zoomIn);
inView('.aniFromTop').on('enter', fromTop);
inView('.aniFromBottom').on('enter', fromBottom);
inView('.aniFromLeft').on('enter', fromLeft);
inView('.aniFromRight').on('enter', fromRight);

inView('.aniFadeIn').on('enter', fadeIn);

//inView.threshold(0.7);

function fadeIn(el){
  el.classList.add("RunAniFadeIn");
}

function fromTopDelay(el){
  el.classList.add("RunAniFromTopDelay");
  console.log("inView");
}

function fromLeftDelay(el){
  el.classList.add("RunAniFromLeftDelay");
}

function zoomIn(el){
  el.classList.add("RunAniZoomIn");
}

function fromTop(el){
  el.classList.add("RunAniFromTop");
}

function fromBottom(el){
  el.classList.add("RunAniFromBottom");
}

function fromLeft(el){
  el.classList.add("RunAniFromLeft");
}

function fromRight(el){
  el.classList.add("RunAniFromRight");
}