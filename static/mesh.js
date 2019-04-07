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
        gltf.scene.children[0].translate.set(5,5,10);
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
    var position = {x:5,  y: 40, z:10 };
    var target = {x:5,  y: 55 ,z:10};
    var tween = new TWEEN.Tween(position).to(target, 1500).yoyo( true ).repeat( Infinity )

    tween.onUpdate(function(){
        crown.position.x = position.x;
        crown.position.y = position.y;
        crown.position.z = position.z;

    });
    tween.start();
}
stars = []
function addSphere(){
    for ( var z= -1000; z < 1000; z+=20 ) {

        var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
        var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        var sphere = new THREE.Mesh(geometry, material)

        sphere.position.x = Math.random() * 1000 - 500;
        sphere.position.y = Math.random() * 1000 - 500;

        sphere.position.z = z;
        sphere.scale.x = sphere.scale.y = 2;
        scene.add( sphere );
        stars.push(sphere); 
    }
}

	function animateStars() { 
				
		for(var i=0; i<stars.length; i++) {
			star = stars[i]; 
			star.position.z +=  i/20;
			if(star.position.z>1000) star.position.z-=2000; 
		}
	
	}


    addSphere();
