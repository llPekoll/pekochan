
var container = document.getElementById('three');
var mouse = new THREE.Vector2();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

var loader = new THREE.ObjectLoader();
var material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture(tex) } );

var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

loader.load(peko,
    function ( obj ) {
        scene.add( obj );
        obj.scale.set(1000,1000,1000);
        obj.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) 
        {
            child.material = material;
        }
        } );
    },
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    function ( err ) {
        console.error( 'An error happened' );
    }
);

camera.position.set(1, 1, 500);
renderer.setSize( window.innerWidth,  window.innerHeight );

document.body.appendChild( container );
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
// document.addEventListener('mousemove', onMouseMove, false);
container.appendChild( renderer.domElement );



// var composer = new THREE.EffectComposer( renderer );
// composer.addPass( new THREE.RenderPass( scene, camera ) );
// var glitchPass = new THREE.GlitchPass();
// glitchPass.renderToScreen = true;
// composer.addPass( glitchPass );

// glitchPass.goWild=container.checked;

function onDocumentMouseMove( event ) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
    camera.position.x += ( mouseX - camera.position.x ) * 0.036;
    camera.position.y += ( - (mouseY) - camera.position.y ) * 0.036;
    camera.lookAt( scene.position );    
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );

    }

//     function onMouseMove(event) {
//     mouseX = event.clientX - window.innerWidth / 2;
//     mouseY = event.clientY - window.innerHeight / 2;
//     camera.position.x += (mouseX - camera.position.x) * 0.0003;
//     camera.position.y += (mouseY - camera.position.y) * 0.0003;
//     if (camera.position.x < -2) {
//         camera.position.x = -2
//     }
//     if (camera.position.x > 2 ) {
//         camera.position.x = 2
//     }
//     if (camera.position.y < -1) {
//         camera.position.y = -1
//     }
//     if (camera.position.y > 1 ) {
//         camera.position.y = 1
//     }
//     camera.lookAt(scene.position);
// };    
animate();