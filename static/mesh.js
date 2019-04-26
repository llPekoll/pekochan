// MESHES
let texture = new THREE.TextureLoader().load( tex );
let pekoMat = new THREE.MeshLambertMaterial( { map: texture } );
let basicMat = new THREE.MeshLambertMaterial( {color: 0xffffff});
basicMat.name = "basicMat";

pekoMat.name = "pekomat";
var pekoIsLoaded = false;
var wingsIsLoaded = false;
var crownIsLoaded = false;

var t=setInterval(runFunction,100);

function runFunction(){
    // console.log("jose");
    if (pekoIsLoaded && wingsIsLoaded && crownIsLoaded)
    {
        var overlay = document.getElementById("overlay");
        overlay.style.display = 'none';
        console.log(" ==> page loaded");
        clearInterval(t);
    };
};

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
            // console.log("peko is Loaded");
        };
        // console.log( "peko" +( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
	function ( error ) { console.log( 'An error happened' );}
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
            // console.log("crown is Loaded");
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
            wingsIsLoaded = true;
            // console.log("wings are Loaded");
        };
    },
	function ( error ) { console.log( 'An error happened' );}
);

var loader = function() {

    var textList = ['title','myName','iUse','now','for','iUse2','unity','now2','and','contact'];

    for (var i = 0; i < textList.length; i++) {
        var elt = document.getElementById(textList[i]);
        elt.classList.add('translate');
    };
};

window.onload = function () { 
    loader();
    var crown = scene.getObjectByName( "crown" );
    crown.material = basicMat;
    var position = {y: 40};
    var target = {y: 55};
    var tween = new TWEEN.Tween(position).to(target, 1500).yoyo( true ).repeat( Infinity );

    tween.onUpdate(function(){
        crown.position.x = 5;
        crown.position.y = position.y;
        crown.position.z = 10;
        crown.rotation.y +=1/100;
    });
    tween.start();
};

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