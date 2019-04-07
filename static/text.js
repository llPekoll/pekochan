
var loader = new THREE.FontLoader();
var textWhite = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var color = new THREE.Color( cssColor);
var textCol = new THREE.MeshBasicMaterial( { color: color } );
var textFont = leitura

//Hello, Something
loader.load( textFont, function ( font ) {
    var textGeo = new THREE.TextGeometry( "Hello,", {
        font: font,
        size: 40,
        height: 0,
	} );  
    var hello = new THREE.Mesh( textGeo, textWhite );
    hello.name = "hello"
    hello.position.set( -winX/3, winY/5, 0 );
    hello.rotation.x = 1.7
    scene2.add( hello );
    var rotation = {x:1.7};
    var target = {x:0};
    var tween = new TWEEN.Tween(rotation).to(target, 1500).delay(4000)
    tween.onUpdate(function(){
        hello.rotation.x = rotation.x;
    });
    
tween.start();

} );
loader.load( textFont, function ( font ) {
    var textGeo = new THREE.TextGeometry( randomName, {
        font: font,
        size: 40,
        height: 0,
	} );  
    var hello = new THREE.Mesh( textGeo, textCol );
    hello.position.set( -winX/3+150, winY/5, 0 );
	scene2.add( hello );
} );
// My name is Yohann,
loader.load( textFont, function ( fonts ) {

    var textName = new THREE.TextGeometry( "My name is Yohann,", {

        font: fonts,

        size: 35,
        height: 0,
       
	} );  
    var mesh = new THREE.Mesh( textName, textWhite );
    mesh.position.set( -winX/3+10, winY/5-70, 0 );
	scene2.add( mesh );
} );

var loader = new THREE.FontLoader();
loader.load( textFont, function ( font ) {

    var textGeo = new THREE.TextGeometry( "/<mmd>.", {

        font: font,

        size: 200,
        height: 5,
        curveSegments: 12,
        bevelThickness: 2,
        bevelSize: 5,
        bevelEnabled: true

	} );  

    var mmdMesh = new THREE.Mesh( textGeo, textMaterial );
    mmdMesh.position.set( 200, 150, 0 );
	mmdMesh.scale.set( .15, .15, .15 );
    scene2.add( mmdMesh );
	targetList.push(mmdMesh);
} );