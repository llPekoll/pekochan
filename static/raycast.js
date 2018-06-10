https://github.com/mrdoob/three.js/blob/master/examples/webgl_geometry_text_shapes.html
var loader = new THREE.FontLoader();
loader.load( 'static/datas/Leitura_new_Italic_4.otf', function ( font ) {
    var xMid, text;
    var textShape = new THREE.BufferGeometry();
    var color = 0x006699;
    var matDark = new THREE.LineBasicMaterial( {
        color: color,
        side: THREE.DoubleSide
    } );
    var matLite = new THREE.MeshBasicMaterial( {
        color: color,
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
    } );
    var message = "   /menu\n/Simple text.";
    var shapes = font.generateShapes( message, 100, 2 );
    var geometry = new THREE.ShapeGeometry( shapes );
    geometry.computeBoundingBox();
    xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
    geometry.translate( xMid, 0, 0 );
    // make shape ( N.B. edge view not visible )
    textShape.fromGeometry( geometry );
    text = new THREE.Mesh( textShape, matLite );
    text.position.z = - 150;
    scene.add( text );
    // make line shape ( N.B. edge view remains visible )
    var holeShapes = [];
    for ( var i = 0; i < shapes.length; i ++ ) {
        var shape = shapes[ i ];
        if ( shape.holes && shape.holes.length > 0 ) {
            for ( var j = 0; j < shape.holes.length; j ++ ) {
                var hole = shape.holes[ j ];
                holeShapes.push( hole );
            }
        }
    }
    shapes.push.apply( shapes, holeShapes );
    var lineText = new THREE.Object3D();
    for ( var i = 0; i < shapes.length; i ++ ) {
        var shape = shapes[ i ];
        var points = shape.getPoints();
        var geometry = new THREE.BufferGeometry().setFromPoints( points );
        
        geometry.translate( xMid, 0, 0 );
        var lineMesh = new THREE.Line( geometry, matDark );
        lineText.add( lineMesh );
    }
    scene.add( lineText );
} ); //end load function
