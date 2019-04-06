// MESHES
let texture = new THREE.TextureLoader().load( tex );
let pekoMat = new THREE.MeshBasicMaterial( { map: texture } );
pekoMat.name = "pekomat"

loader.load( peko,
	function ( gltf ) {
        gltf.scene.children[0].name = "peko"
        scene.add( gltf.scene );
        gltf.scene.children[0].scale.set(700,700,700);
        gltf.scene.children[0].children[0].material = pekoMat
	},
	function ( xhr ) { console.log( "peko" +( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
	function ( error ) { console.log( 'An error happened' );}
);

loader.load( crown,
	function ( gltf ) {
        gltf.scene.children[0].name = "crown"
        scene.add( gltf.scene );
        gltf.scene.children[0].scale.set(20,20,20);
	},
	function ( xhr ) { console.log( "crown" + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );},
	function ( error ) { console.log( 'An error happened' ); }
);

loader.load( wings,
	function ( gltf ) {
        gltf.scene.name = "wings"
        scene.add( gltf.scene );
        
        var model = gltf.scene;
        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();
	},
	function ( xhr ) { console.log( "wings" +( xhr.loaded / xhr.total * 100 ) + '% loaded' ); },
	function ( error ) { console.log( 'An error happened' );}
);


window.onload = function () { 
    var crown = scene.getObjectByName( "crown" );
    var position = { x : 0, y: 40,z:10 };
    var target = { x : 0, y: 55,z:50 };
    var tween = new TWEEN.Tween(position).to(target, 1500).yoyo( true ).repeat( Infinity ).easing( TWEEN.Easing.Cubic.InOut );
    
    tween.onUpdate(function(){
        crown.position.x = position.x;
        crown.position.y = position.y;
    });
tween.start();
}