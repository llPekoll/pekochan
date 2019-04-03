My website
==========

work on my personal website  

pip freeze > requirements.txt

TODO:
=====
 - [ ] make it virtual env
 - [ ] animate the text in the front( make it 3d)
 - [ ] put a background for the text,(to make the text readable)
 - [ ] wings and crown can be animated


for hosting.  
paperplane.io  
https://www.pythonanywhere.com/pricing/  


top left corner put JS experiences too  
/smile  
/3dofme  
/black  
/bronw nad stuff  

log
===
 - added enviroement variables
    add this in the deployement enviroement
    >> export prod=True

inspiration
===============
https://kentatoshikura.com/  
http://findmatthew.com/  
https://pierre.io/  
http://www.michaelvillar.com/  
https://optimo.com/  
http://slyillustrations.com/  
https://www.eliwilliamson.com/  
http://www.drama.xxx/  
http://www.larsberg.net/#/thumpThump  
https://stemkoski.github.io/Three.js/  
https://threejs.org/examples/#webgl_shaders_vector  
https://codepen.io/scorch/pen/xdGPVa  
https://vincentgarreau.com/particles.js/  

lib 
====
http://animejs.com/  
http://mojs.io/  
http://three.js/  
http://pixi.js  

host
====
https://www.pythonanywhere.com/forums/topic/1496/
https://codemyui.com/tag/social-icon/
http://juliangarnier.com/
https://codemyui.com/blog-post-card-ui/
https://codemyui.com/gooey-sidebar-stretch-menu-concept/
https://codemyui.com/blurry-loading-quote-animation-effect/

utils
=====
font converterto Json.
https://gero3.github.io/facetype.js/

server Debian 9
===============


https://www.youtube.com/watch?v=kDRRtPO0YPA
run nginx server
sudo /etc/init.d/nginx start
rm /etc/nginx/sites-available/default


in case of localhost nginx[1166]: nginx: [emerg] listen() to 0.0.0.0:80, backlog 511 failed (98: Address already in use)
sudo apachectl stop

to check if the config file is ok
sudo nginx -t

run app in BG

sudo nohup gunicorn flask_app:app &

configuration

https://stackoverflow.com/questions/11773544/nginx-different-domains-on-same-ip
vim /etc/nginx/sites-enabled/flask_settings 