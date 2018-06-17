
var loader = new THREE.FontLoader();
loader.load( fontMenu, function ( font ) {

    var textGeo = new THREE.TextGeometry( "/<About>.", {

        font: font,

        size: 200,
        height: 5,
        curveSegments: 12,
        bevelThickness: 2,
        bevelSize: 5,
        bevelEnabled: true

	} );  
	
	var textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );

    var mesh = new THREE.Mesh( textGeo, textMaterial );
    mesh.position.set( 200, 250, 0 );
	mesh.scale.set( .15, .15, .15 );
	scene2.add( mesh );
	targetList.push(mesh);

} );

var loader = new THREE.FontLoader();
loader.load( fontMenu, function ( font ) {

    var textGeo = new THREE.TextGeometry( "/<smile>.", {

        font: font,

        size: 200,
        height: 5,
        curveSegments: 12,
        bevelThickness: 2,
        bevelSize: 5,
        bevelEnabled: true

	} );  
	
	var textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );

    var smileMesh = new THREE.Mesh( textGeo, textMaterial );
    smileMesh.position.set( 200, 200, 0 );
	smileMesh.scale.set( .15, .15, .15 );
	scene2.add( smileMesh );
	targetList.push(smileMesh);

} );

var loader = new THREE.FontLoader();
loader.load( fontMenu, function ( font ) {

    var textGeo = new THREE.TextGeometry( "/<mmd>.", {

        font: font,

        size: 200,
        height: 5,
        curveSegments: 12,
        bevelThickness: 2,
        bevelSize: 5,
        bevelEnabled: true

	} );  
	
	var textMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );

    var mmdMesh = new THREE.Mesh( textGeo, textMaterial );
    mmdMesh.position.set( 200, 150, 0 );
	mmdMesh.scale.set( .15, .15, .15 );
    scene2.add( mmdMesh );
	targetList.push(mmdMesh);
} );