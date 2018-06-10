
var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three'), alpha: true, antialias: true });
renderer.setSize( window.innerWidth,  window.innerHeight );
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
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

var mat = new THREE.ShaderMaterial({
    vertexShader:document.getElementById('vertexShader').textContent,
    fragmentShader:document.getElementById('fragmentShader').textContent,
    
})

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
composer.addPass( new THREE.RenderPass( scene, camera ) );

var effect = new THREE.ShaderPass( THREE.DotScreenShader );
effect.uniforms[ 'scale' ].value = 5;
composer.addPass( effect );
var effect = new THREE.ShaderPass( THREE.RGBShiftShader );
effect.uniforms[ 'amount' ].value = 0.000015;
effect.renderToScreen = true;
composer.addPass( effect );

var bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5/2, 0.4, 0.87 ); //1.0, 9, 0.5, 512);
bloomPass.renderToScreen = true;
composer.addPass( effect );
composer.addPass( bloomPass );

function onDocumentMouseMove( event ) {
    var mouseX = event.clientX -  window.innerWidth/2;
    var mouseY = event.clientY - window.innerHeight/2;
    camera.position.x += ( mouseX - camera.position.x ) * 0.036;
    camera.position.y += ( - (mouseY) - camera.position.y ) * 0.036;
    camera.lookAt( scene.position );    
}

function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
    composer.render()
}
render();