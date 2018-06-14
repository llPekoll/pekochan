var loader3 = new THREE.FontLoader();
loader3.load( fontMenu, function ( font ) 
    {
        var xMid, text;
        var textShape = new THREE.BufferGeometry();
        var color = 0xffffff;
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
        var message = "\n/Smille.";
        var shapes = font.generateShapes( message, 100, 2 );
        var geometry = new THREE.ShapeGeometry( shapes );
        geometry.computeBoundingBox();
        xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        geometry.translate( xMid, 0, 0 );
        // make shape ( N.B. edge view not visible )
        textShape.fromGeometry( geometry );
        text = new THREE.Mesh( textShape, matLite );
		text.position.set(40,400,0);
        scene2.add( text );
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
			lineText.position.set(40,400,-40);
			lineText.add( lineMesh );
			
        }
		scene2.add( lineText );
		
    })