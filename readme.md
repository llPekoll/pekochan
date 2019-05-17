My website
==========

Personal Website  

pip freeze > requirements.txt

TODO:
=====

 - [ ] compress => Gzip  uzing Nginx
 - [ ] make something for non threejs user like mobile
 - [x] animation opening
 - [x] bootstrap
 - [x] rings around me and add planets
 - [x] assets bundle
 - [x] compression
 - [x] animate the text in the front ~~( make it 3d)~~
 - [x] put a background for the text,(to make the text readable)
 - [x] remove month if ==0
 - [x] make it virtual env
 - [x] wings and crown can be animated


SASS
====
` > cd static`
` > sass --watch scss:css`

update the website
==================

`uvicorn main:app`   
`sudo systemctl stop nginx`
`top -> killall uvicorn`
`Git pull`
`sudo systemctl start nginx`

local docker test
`docker build -t image1 .`  
`docker run --name myimage1 -d -p 8080:80 image1`  

inspiration
===============
https://kentatoshikura.com/  
https://pierre.io/  
http://www.michaelvillar.com/  
http://slyillustrations.com/  
https://www.eliwilliamson.com/  
http://www.drama.xxx/  
http://www.larsberg.net/#/thumpThump  
https://codepen.io/scorch/pen/xdGPVa  
https://vincentgarreau.com/particles.js/  
http://juliangarnier.com/

lib 
====
http://animejs.com/  

utils
=====
GLTF converter  
https://blackthread.io/gltf-converter/  

server Ubuntu 18.04
===============

configuration
https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uswgi-and-nginx-on-ubuntu-18-04


user ubuntu
https://www.digitalocean.com/community/tutorials/how-to-create-a-sudo-user-on-ubuntu-quickstart