// https://threejs.org/examples/?q=mate#webgl_materials_variations_toon



var width = window.innerWidth;
var height = window.innerHeight;
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background'), alpha: true, antialias: true });
renderer.setSize(width, height);

var scene = new THREE.Scene();

var cubeGeometry = new THREE.CubeGeometry(3, 3, 3);
var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.rotation.y = Math.PI * 45 / 180;
scene.add(cube);

var camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.y = 16;
camera.position.z = 40;
camera.lookAt(cube.position);

scene.add(camera);

var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);
scene.add(pointLight);

var clock = new THREE.Clock();

effect = new THREE.OutlineEffect( renderer, {  defaultThickness: 0.09, defaultColor: [ 0.2, 0.2, .5 ]});

function render() 
{
    requestAnimationFrame(render);
    cube.rotation.y -= clock.getDelta();        
    effect.render( scene, camera );
}

render();


var watch = require('node-watch');
 
watch('file_or_dir', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);
});