

// LIGHTS
var targetList = [];
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

// loader.load(crown,
//     function ( crown ) {
//         crown.material = new THREE.MeshPhongMaterial({color: 0xdddddd});
//         crown.scale.set(30,30,30);
//         crown.position.set(5,260,70);
//         crown.position.y -= 40;
//         scene.add( crown );
//     },
//     function ( xhr ) {
//         console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
//     },
//     function ( err ) {
//         console.error( 'An error happened' );
//     }
// );

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

// Instantiate a loader
var loader = new THREE.GLTFLoader();

// // Optional: Provide a DRACOLoader instance to decode compressed mesh data
// THREE.DRACOLoader.setDecoderPath( '/examples/js/libs/draco' );
// loader.setDRACOLoader( new THREE.DRACOLoader() );
	
// // Optional: Pre-fetch Draco WASM/JS module, to save time while parsing.
// THREE.DRACOLoader.getDecoderModule();

// Load a glTF resource

loader.load(
	// resource URL
	crownGltf,
	// called when the resource is loaded
	function ( crown ) {
        crown.scene.children[0].name = "crown"
        scene.add( crown.scene );
        crown.scene.children[0].scale.set(25,25,25);
        crown.material = new THREE.MeshPhongMaterial({color: 0xdddddd});
        crown.animations; // Array<THREE.AnimationClip>
		crown.scene; // THREE.Scene
		crown.scenes; // Array<THREE.Scene>
        crown.cameras; // Array<THREE.Camera>
		crown.asset; // Object
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);


// var mmd = scene.getObjectByName( "crown", true );
// console.log(mmd);

// for (let elt of scene.children) 
// {
//     console.log(elt);
// }



window.onload = function () { 
    var jose = scene.getObjectByName( "crown" );
    console.log( jose );
    var position = { x : 0, y: 0 };
    var target = { x : 0, y: 10 };
    var tween = new TWEEN.Tween(position).to(target, 2000).yoyo( true ).repeat( Infinity ).easing( TWEEN.Easing.Cubic.InOut );
    
    tween.onUpdate(function(){
        jose.position.x = position.x;
        jose.position.y = position.y;
    });

    // tween.easing(TWEEN.Easing.elasticOut)
    // tween.
    tween.start();


}