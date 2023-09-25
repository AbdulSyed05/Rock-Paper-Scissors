const nameInput = document.getElementById("exampleInputEmail1")
console.log(nameInput.value)
function App() {
    var container = document.getElementById('container');
    
 
    var circle = document.getElementById('circle');
    var square = document.getElementById('square');
    var triangle = document.getElementById('triangle');
    var pentagon = document.getElementById('pentagon');
  
    function animate(elem, startX, startY, bounce, duration) {
      
      let posStartX;
      if (startX === 'left') {
        posStartX = 0;
      } else {
        posStartX = 100;
      }

      let posX = startX;

      let keyframes = [];
      
      for (let i = 1; i <= bounce; i++) {
        let translateX;
        let translateY;
        if (i === 1 || i === bounce) {

          translateX = startX === 'right' ? `translateX(${posStartX}vw) translateX(-80px)` : `translateX(${posStartX}vw)`;
          translateY = `translateY(${startY}px)`;
        } else {

          translateX = posX === 'right' ? `translateX(100vw) translateX(-180px)` : `translateX(0vw)`;
      
          translateY = `translateY(${['-', ''][Math.floor(Math.random() * 2)]}${Math.floor(Math.random() * 200)}px)`;
        }
        
        
        let transform = `${translateX} ${translateY}`;
        keyframes.push({transform: transform});
        
       
        posX = posX === 'right' ? 'left' : 'right';
      }
      var options = {
          duration: duration,
          iterations: Infinity
        };
      elem.animate(keyframes, options);
    };
    
    
    animate(circle, 'left', 12, 5, 36000);
    animate(square, 'left', 60, 7, 37000);
    animate(triangle, 'right', 27, 5, 38000);
    animate(pentagon, 'right', 99, 7, 39000);
  }
  
  App();