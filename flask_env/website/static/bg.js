// Three.js

var container = document.getElementById('three');
// document.write(container);
var mouse = new THREE.Vector2();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(1, 1, 2);
var renderer = new THREE.WebGLRenderer();
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial( { 				
    color: Math.random() * 0xff00000 - 0xff00000,
    shading: THREE.FlatShading } 
);
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
scene.background = new THREE.Color( 0x6d6d7479 );

light = new THREE.PointLight(0xffffff, 1, 4000);
light.position.set(5, 0, 0);
light_two = new THREE.PointLight(0xffffff, 1, 4000);
light_two.position.set(-1, 8, 8);
lightAmbient = new THREE.AmbientLight(0x404040);
scene.add(light, light_two, lightAmbient);

camera.position.z = 5;
renderer.setSize( window.innerWidth,  window.innerHeight );

document.body.appendChild( container );
document.addEventListener('mousemove', onMouseMove, false);
container.appendChild( renderer.domElement );
function animate() 
    {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    }
    function onMouseMove(event) {

        mouseX = event.clientX - window.innerWidth / 2;
        mouseY = event.clientY - window.innerHeight / 2;
        camera.position.x += (mouseX - camera.position.x) * 0.0003;
        camera.position.y += (mouseY - camera.position.y) * 0.0003;
        if (camera.position.x < -2) {
            camera.position.x = -2
        }
        if (camera.position.x > 2 ) {
            camera.position.x = 2
        }
        if (camera.position.y < -1) {
            camera.position.y = -1
        }
        if (camera.position.y > 1 ) {
            camera.position.y = 1
        }
        
        console.log('camera x',camera.position.x);
        console.log('camera y', camera.position.y);
        camera.lookAt(scene.position);
    };
    
animate();

// Jquery smooth transition
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
