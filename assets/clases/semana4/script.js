window.addEventListener('DOMContentLoaded', function() {
    var circle = document.getElementById('circle');
    var playBtn = document.getElementById('play');
    var pauseBtn = document.getElementById('pause');
    var stopBtn = document.getElementById('stop');
    var reverseBtn = document.getElementById('reverse');
  
    playBtn.addEventListener('click', function() {
      circle.style.animationPlayState = 'running';
    });
  
    pauseBtn.addEventListener('click', function() {
      circle.style.animationPlayState = 'paused';
    });
  
    stopBtn.addEventListener('click', function() {
      circle.style.animationPlayState = 'paused';
      circle.style.left = '0';
    });
  
    reverseBtn.addEventListener('click', function() {
    if (circle.style.animationDirection === 'reverse') {
        circle.style.animationDirection = 'normal';
    }else {
        circle.style.animationDirection = 'reverse';
    }
    
    });

stopBtn.addEventListener('click', function() {
  circle.style.animationPlayState = 'paused';
  circle.style.left = '0';
});


    
  });
  