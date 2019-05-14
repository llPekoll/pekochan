'use strict';
var renderer, scene, camera, container, material, mesh, uniforms;
var noise = new THREE.ImprovedNoise();
window.addEventListener('load',init);


function updateBlob(geometry)
{
    var time =.001 *Date.now()
    var vertex, distance;
    for(var j =0; j< geometry.vertices.length;j++)
    {
        vertex = geometry.vertices[j];
        distance = 30 +3 * noise.noise(
            .1*vertex.x + 1.0 * time,
            .1*vertex.y + .9 * time,
            .1*vertex.z + 1.1 * time,
        );
        vertex.normalize().multiplyScalar(distance);
    }
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();

    geometry.verticesNeedUpdate = true;
    geometry.normalsNeedUpdate = true;
}
function init()
{
    const winX = window.innerWidth;
    const winY = window.innerHeight;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, winX / winY , 10 ,1000);
    camera.position.z =100;
    scene.add(camera);
    renderer = new THREE.WebGLRenderer({canvas: document.getElementById('main'),antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    container = renderer.domElement;
    document.body.appendChild(container);

    uniforms = {
        time: { type: "f", value: 1.0 },
        resolution: { type: "v2", value: new THREE.Vector2() }
      };

    material = new THREE.ShaderMaterial({
        uniforms:uniforms,
        vertexShader: document.getElementById('sem-vs').textContent,
        fragmentShader: document.getElementById('sem-fs').textContent,
    })
    material.flatShading  = false;
    var geometry = new THREE.CubeGeometry(10, 10,10,30,30,30);
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh)
    render();
}
var startTime = Date.now();
function render(){
    requestAnimationFrame(render);
    updateBlob(mesh.geometry)
    var elapsedMilliseconds = Date.now() - startTime;
    var elapsedSeconds = elapsedMilliseconds / 1000.;
    uniforms.time.value = 1. * elapsedSeconds;
    mesh.rotation.y +=0.02;
    renderer.render(scene, camera);
}
