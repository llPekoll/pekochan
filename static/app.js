
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
document.addEventListener( 'resize', onWindowResize, false );
// postprocessing
var composer = new THREE.EffectComposer( renderer );
var renderPass = new THREE.RenderPass(scene, camera);
composer.addPass( renderPass );

var effect = new THREE.ShaderPass( THREE.DotScreenShader );
effect.uniforms[ 'scale' ].value = 5;
composer.addPass( effect );
var effect = new THREE.ShaderPass( THREE.RGBShiftShader );
effect.uniforms[ 'amount' ].value = 0.000015;
composer.addPass( effect );
effect.renderToScreen = true;
composer.addPass( effect );

var pass2 = new THREE.GlitchPass( 100 );
composer.addPass( pass2 );
pass2.renderToScreen = true;

var mouse = { x: 0, y: 0 }, INTERSECTED;
var raycaster = new THREE.Raycaster();
render();

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
    var mouseX = event.clientX -  window.innerWidth/2;
    var mouseY = event.clientY - window.innerHeight/2;
    camera.position.x += ( mouseX - camera.position.x ) * 0.036;
    camera.position.y += ( - (mouseY) - camera.position.y ) * 0.036;
    camera.lookAt( scene.position ); 
    camera2.position.x += ( mouseX - camera2.position.x ) * 0.0036;
    camera2.position.y += ( - (mouseY) - camera2.position.y ) * 0.0036;
    camera2.lookAt( scene2.position );

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function render() {

    requestAnimationFrame( render );
    renderer.clearDepth();
    composer.render()
    renderer.clearDepth();
	renderer.render( scene2, camera2 );
	TWEEN.update();
	mixer.update(clock.getDelta());
}
