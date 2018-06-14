
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background'), alpha: true, antialias: true });
renderer.autoClear = false;
renderer.setSize( window.innerWidth,  window.innerHeight );

document.addEventListener( 'mousemove', onDocumentMouseMove, false );
// window.addEventListener( 'resize', onWindowResize, false );
var scene = new THREE.Scene();
var scene2 = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
var camera2 = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
camera2.position.set(1, 1, 800);
camera.position.set(1, 1, 800);
var mouse = new THREE.Vector2();

// LIGHTS

var light = new THREE.AmbientLight( 0x404040 );
scene.add( light );
var light = new THREE.PointLight(0x111100, 400, 700);
light.position.set(40,100,200);
scene.add(light);

// MESHES
var loader = new THREE.ObjectLoader();
var texture = new THREE.TextureLoader().load( tex );
var material = new THREE.MeshBasicMaterial( { map: texture } );



loader.load(peko,
    function ( obj ) {
        scene.add( obj );
        obj.scale.set(1000,1000,1000);
        obj.position.y -= 80;
        obj.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) 
            {child.material = material;}
        } );
    },
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    function ( err ) {
        console.error( 'An error happened' );
    }
);

loader.load(crown,
    function ( crown ) {
        crown.material = new THREE.MeshPhongMaterial({color: 0xdddddd});
        crown.scale.set(30,30,30);
        crown.position.set(5,260,70);
        crown.position.y -= 40;
        scene.add( crown );
    },
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    function ( err ) {
        console.error( 'An error happened' );
    }
);

loader.load(wings,
    function ( wings ) {
        wings.material = new THREE.MeshBasicMaterial(  { color: 0xffff00, side: THREE.DoubleSide });
        wings.scale.set(250,250,250);
        wings.position.set(0,-170,-40);
        wings.position.y -= 80;
        scene.add( wings );
        },
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    function ( err ) {
        console.error( 'An error happened' );
    }
);



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

// var pass1 = new THREE.ShaderPass( THREE.SepiaShader ); //1.0, 9, 0.5, 512);
// composer.addPass( pass1 );
// pass1.renderToScreen = true;

var pass2 = new THREE.GlitchPass( 100 );
composer.addPass( pass2 );
pass2.renderToScreen = true;


render();

// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize( window.innerWidth, window.innerHeight );
// }

function onDocumentMouseMove( event ) {
    var mouseX = event.clientX -  window.innerWidth/2;
    var mouseY = event.clientY - window.innerHeight/2;
    camera.position.x += ( mouseX - camera.position.x ) * 0.036;
    camera.position.y += ( - (mouseY) - camera.position.y ) * 0.036;
    camera.lookAt( scene.position ); 
    camera2.position.x += ( mouseX - camera2.position.x ) * 0.0036;
    camera2.position.y += ( - (mouseY) - camera2.position.y ) * 0.0036;
    camera2.lookAt( scene2.position );       
}

function render() {
    requestAnimationFrame( render );

   renderer.clearDepth();
//    renderer.render( scene, camera );
   composer.render()
    renderer.clearDepth();
    renderer.render( scene2, camera2 );
}

