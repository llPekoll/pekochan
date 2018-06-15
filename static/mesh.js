

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

