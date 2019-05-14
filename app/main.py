import os

from starlette.applications import Starlette
from starlette.routing import Router, Mount
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates
import uvicorn
from random import randint
import content as ct

templates = Jinja2Templates(directory='templates')
app = Router(routes=[
    Mount('/static', app=StaticFiles(directory='static'), name="static"),
])
app.mount('/static', StaticFiles(directory='static'), name='static')

@app.route('/')
async def homepage(request):
    return templates.TemplateResponse('index.html', {'request': request})

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)

# @app.route('/')
# def index():
#     rand_name = randint(0, len(ct.rand_name)-1)
#     rand_css = randint(0, len(ct.csss)-1)
#     years, months = ct.get_python_time()
#     return render_template('index.html', rand=ct.rand_name[rand_name],
#                             years=years,css=ct.csss[rand_css],
#                             months=months), 200

# @app.route('/sakulu')
# def sakulu():
#     return render_template('sakulu.html'), 200

# from flask_compress import Compress
# from flask_assets import Environment, Bundle
# assets = Environment(app)

# js = Bundle('js/tween.js',
#             'js/three.min.js',
#             'js/loaders/GLTFLoader.js',
#             'js/postprocessing/EffectComposer.js',
#             'js/postprocessing/RenderPass.js',
#             'js/postprocessing/ShaderPass.js',
#             'js/postprocessing/GlitchPass.js',
#             'js/postprocessing/RGBShiftShader.js',
#             'js/postprocessing/DotScreenShader.js',
#             'js/postprocessing/CopyShader.js',
#             'js/postprocessing/DigitalGlitch.js',
#             'sceneDefinition.js',
#             'mesh.js',
#             'app.js',
#             filters='jsmin', output='gen/packed.js')
# assets.register('js_all', js)

# css = Bundle('css/main.css','css/loader.css',filters='cssmin',output='gen/packed.css')
# assets.register('css_all', css)



# Compress(app)




