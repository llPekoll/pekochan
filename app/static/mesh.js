// MESHES
let texture = new THREE.TextureLoader().load( tex );
let pekoMat = new THREE.MeshLambertMaterial( { map: texture } );
let basicMat = new THREE.MeshLambertMaterial( {color: 0xffffff});
basicMat.name = "basicMat";

pekoMat.name = "pekomat";
var pekoIsLoaded = false;
var wingsIsLoaded = false;
var crownIsLoaded = false;
var meshLoaded = 0;
loader.load( peko,
	function ( gltf ) {
        gltf.scene.children[0].name = "peko";
        scene.add( gltf.scene );
        gltf.scene.children[0].scale.set(700,700,700);
        gltf.scene.children[0].children[0].material = pekoMat;
	},
	function ( xhr ) {
        if ( xhr.loaded / xhr.total >=1){
            pekoIsLoaded = true;
            updateMeshCounter(xhr.loaded , xhr.total);
        };
        // console.log( "peko" +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
	function ( error ) { console.log( 'An error happened' );}
);

loader.load( ring,
	function ( gltf ) {
        gltf.scene.children[0].name = "ring";
        scene.add( gltf.scene );
        gltf.scene.children[0].scale.set(575,575,575);
        gltf.scene.children[2].scale.set(500,500,500);
        gltf.scene.children[1].scale.set(710,710,710);
        gltf.scene.children[0].position.y = -50;
        gltf.scene.children[1].position.y = -50;
        gltf.scene.children[2].position.y = -50;
	},
	function ( xhr ) { 
        if ( xhr.loaded / xhr.total >=1){
            crownIsLoaded = true;
            updateMeshCounter(xhr.loaded , xhr.total);
        };
    },
	function ( error ) { console.log( 'An error happened' ); }
);

loader.load( crown,
	function ( gltf ) {
        gltf.scene.children[0].name = "crown";
        scene.add( gltf.scene );
        gltf.scene.children[0].scale.set(20,20,20);
	},
	function ( xhr ) { 
        if ( xhr.loaded / xhr.total >=1){
            crownIsLoaded = true;
            updateMeshCounter(xhr.loaded , xhr.total);
        };
    },
	function ( error ) { console.log( 'An error happened' ); }
);

loader.load( wings,
	function ( gltf ) {
        gltf.scene.name = "wings";
        scene.add( gltf.scene );
        var model = gltf.scene;
        gltf.scene.children[0].material = basicMat;
        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();
	},
	function ( xhr ) { 
        if ( xhr.loaded / xhr.total >=1){
            updateMeshCounter(xhr.loaded , xhr.total);
            wingsIsLoaded = true;
        };
    },
	function ( error ) { console.log( 'An error happened' );}
);

stars = [];
function addSphere(){
    for ( var z= -1000; z < 1000; z+=20 ) 
    {
        var geometry   = new THREE.SphereGeometry(0.5, 32, 32);
        var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        var sphere = new THREE.Mesh(geometry, material)

        sphere.position.x = Math.random() * 1000 - 500;
        sphere.position.y = Math.random() * 1000 - 500;

        sphere.position.z = z;
        sphere.scale.x = sphere.scale.y = 2;
        scene.add( sphere );
        stars.push(sphere); 
    };
};
function animateStars() { 
    for(var i=0; i<stars.length; i++) {
        star = stars[i]; 
        star.position.z +=  i/20;
        if(star.position.z>1000) star.position.z-=2000; 
    };
};
addSphere();

function updateMeshCounter(toadd, toaddTotal)
{
    meshLoaded += toadd / toaddTotal * 100 
}