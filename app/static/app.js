document.addEventListener( 'mousemove', onDocumentMouseMove, false );
document.addEventListener( 'resize', onWindowResize, false );
// postprocessing
var composer = new THREE.EffectComposer( renderer );
var renderPass = new THREE.RenderPass(scene, camera);
composer.addPass( renderPass );

var effect = new THREE.ShaderPass( THREE.DotScreenShader );
effect.uniforms[ 'scale' ].value = 5;
composer.addPass( effect );
var effect = new THREE.ShaderPass( THREE.RGBShiftShader );
effect.uniforms[ 'amount' ].value = 0.000015;
composer.addPass( effect );
effect.renderToScreen = true;
composer.addPass( effect );

var pass2 = new THREE.GlitchPass( 100 );
composer.addPass( pass2 );
pass2.renderToScreen = true;

var mouse = { x: 0, y: 0 }, INTERSECTED;
var raycaster = new THREE.Raycaster();
render();

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
};

function onDocumentMouseMove( event ) {
    var mouseX = event.clientX -  window.innerWidth/2;
    var mouseY = event.clientY - window.innerHeight/2;
    camera.position.x += ( mouseX - camera.position.x ) * 0.036;
    camera.position.y += ( - (mouseY) - camera.position.y ) * 0.036;
    camera.lookAt( scene.position ); 
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
};

function render() {
    requestAnimationFrame( render );
    renderer.clearDepth();
    composer.render();
    animateStars();	
    TWEEN.update();
    if(mixer){
        mixer.update(clock.getDelta());
    };

    document.querySelector( '.pp' ).innerHTML = meshLoaded / 4 + "&#37;";
};

var i=0;
var t=setInterval(runFunction,0.01);
function runFunction()
{
    i +=1;
    if (pekoIsLoaded && wingsIsLoaded && crownIsLoaded)
    {
        if (i==150)
        {
            textAnimation();
            clearInterval(t);
        };
        document.querySelector('.multi-ripple ').style.animation = '1.5s transparency forwards'
        document.querySelector('.pp ').style.animation = '1.5s transparency forwards'
    };
};

window.onload = function () { 

    spinnerHandler();
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

function textAnimation() {
    
    var textList = ['title','myName','iUse','now','for','iUse2','unity','now2','and','contact'];
    
    for (var i = 0; i < textList.length; i++) {
        var elt = document.getElementById(textList[i]);
        elt.classList.add('translate');
    };
    document.querySelector('.left-side').style.animation = '1.5s openCurtainLeft forwards';
    document.querySelector('.right-side').style.animation = '1.5s openCurtainRight forwards';
};

var toDesapear = [];
function spinnerHandler()
{
    toDesapear.push(document.querySelector(".pp"));
    toDesapear.push(document.querySelector(".multi-ripple"));
    for (elt of toDesapear) {
        elt.style.opacity = 1;
    };
};