var renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg-3d'), alpha: true, antialias: true });
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
 var ambient = new THREE.AmbientLight( 0xfafafa,.3 );
scene.add( ambient );
var light = new THREE.PointLight(0x404040, 2);
light.position.set(180,85,265);
scene.add(light);

var light2 = new THREE.PointLight(0xffffff, 0.1);
light2.position.set(-312,0,48);
scene.add(light2);

var light3 = new THREE.PointLight(0xffffff, 3);
light3.position.set(-3,275,-271);
scene.add(light3);
