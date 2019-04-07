var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background'), alpha: true, antialias: true });
renderer.autoClear = false;
const winX = window.innerWidth;
const winY = window.innerHeight;
renderer.setSize( winX,  winY );

var mixer;
var loader = new THREE.GLTFLoader();
var clock = new THREE.Clock();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, winX / winY, 0.1, 2000 );
camera.position.set(1, 1, 800);

// LIGHTS
var light = new THREE.AmbientLight( 0x404040 );
scene.add( light );
var light = new THREE.PointLight(0x111100, 400, 700);
light.position.set(40,100,200);
scene.add(light);
