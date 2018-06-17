
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background'), alpha: true, antialias: true });
renderer.autoClear = false;
renderer.setSize( window.innerWidth,  window.innerHeight );

document.addEventListener( 'mousedown', onDocumentMouseDown, false );
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
document.addEventListener( 'resize', onWindowResize, false );
var scene = new THREE.Scene();
var scene2 = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
var camera2 = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
camera2.position.set(1, 1, 800);
camera.position.set(1, 1, 800);



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


// var pass1 = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5/2, 0.4, 0.87 );
// composer.addPass( pass1 );
// pass1.renderToScreen = true;

var pass2 = new THREE.GlitchPass( 100 );
composer.addPass( pass2 );
pass2.renderToScreen = true;


var mouse = { x: 0, y: 0 }, INTERSECTED;
var raycaster = new THREE.Raycaster();
var projector = new THREE.Projector();
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
    update()

}

function update()
{
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera2);
	var intersects = raycaster.intersectObjects( scene2.children );
	if ( intersects.length > 0 )
	{
		if ( intersects[ 0 ].object != INTERSECTED ) 
		{
		    // restore previous intersection object (if it exists) to its original color
			if ( INTERSECTED ) 
				INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
			// store reference to closest object as current intersection object
			INTERSECTED = intersects[ 0 ].object;
			// store color of closest object (for later restoration)
			INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
			// set a new color for closest object
			INTERSECTED.material.color.setHex( 0xffff00 );
		}
	} 
	else // there are no intersections
	{
		// restore previous intersection object (if it exists) to its original color
		if ( INTERSECTED ) 
			INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
		// remove previous intersection object reference
		//     by setting current intersection object to "nothing"
		INTERSECTED = null;
	}

}

function onDocumentMouseDown( event ) 
{
	
	console.log("Click.");

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    var raycaster2 = new THREE.Raycaster();
    raycaster2.setFromCamera(mouse, camera2);
	var intersects2 = raycaster2.intersectObjects( scene2.children );
	
	if ( intersects2.length > 0 )
	{
		console.log("Hit @ " + toString( intersects2[0] ) );
		intersects2[ 0 ].object.material.color.set( 0xff0000 );
	}

}
