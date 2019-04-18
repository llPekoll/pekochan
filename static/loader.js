function loader() {

    var textList = ['title','myName','iUse','now','for','iUse2','unity','now2','and','contact'];

    for (var i = 0; i < textList.length; i++) {
        // console.log(textList[i]);
        // eval( "var "+textList[i] +"document.getElementById("+textList[i]+");");
        var elt = document.getElementById(textList[i]);
        elt.classList.add('translate');
    }
}