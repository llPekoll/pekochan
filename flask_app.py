
import os
from flask import Flask, render_template
from random import randint
import content as ct
app = Flask(__name__)

@app.route('/')
@app.route('/<name>')
def index(name=None):
    rand_nb = randint(0, len(ct.rand_name)-1)
    return render_template('index.html', name=name,
                           rand=ct.rand_name[rand_nb],
                           about=ct.about,
                           css=ct.css), 200

if 'prod' in os.environ:
    if __name__ == '__main__':
        app.run()
else:
    app.run(port=5000, debug=True)