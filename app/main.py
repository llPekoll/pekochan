import os
from random import randint

import content as ct

import uvicorn
from starlette.applications import Starlette
from starlette.routing import Router, Mount
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates
from webassets import Environment, Bundle

templates = Jinja2Templates(directory='templates')
app = Router(routes=[Mount('/static', app=StaticFiles(directory='static'), name="static")])

my_env = Environment(directory='./static/',url='/')

js = Bundle('js/tween.js',
            'js/three.min.js',
            'js/loaders/GLTFLoader.js',
            'js/postprocessing/EffectComposer.js',
            'js/postprocessing/RenderPass.js',
            'js/postprocessing/ShaderPass.js',
            'js/postprocessing/GlitchPass.js',  
            'js/postprocessing/RGBShiftShader.js',
            'js/postprocessing/DotScreenShader.js',
            'js/postprocessing/CopyShader.js',
            'js/postprocessing/DigitalGlitch.js',
            'sceneDefinition.js',
            'mesh.js',
            'app.js',
            filters='jsmin', output='gen/packed.js')
my_env.register('js_all', js)
css = Bundle('css/main.css','css/loader.css',filters='cssmin',output='gen/packed.css')
my_env.register('css_all', css)

@app.route('/')
async def homepage(request):

    rand_name = randint(0, len(ct.rand_name)-1)
    rand_css = randint(0, len(ct.csss)-1)
    years, months = ct.get_python_time()
    context = {"request": request,
                "rand":ct.rand_name[rand_name],
                "cssBundle":my_env['css_all'].urls()[0],
                "jsonBundle":my_env['js_all'].urls()[0],
                "years":years,
                "css":ct.csss[rand_css],
                "months":months
                }
    return templates.TemplateResponse('index.html',context)

@app.route('/sakulu')
async def sakulu(request):
    context = {"request": request }
    return templates.TemplateResponse('sakulu.html',context)

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)

# from flask_compress import Compress
# Compress(app)