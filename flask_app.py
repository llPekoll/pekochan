import os
from flask import Flask, render_template
from random import randint
import content as ct

app = Flask(__name__)

@app.route('/')
def index():
    rand_name = randint(0, len(ct.rand_name)-1)
    rand_css = randint(0, len(ct.csss)-1)
    years, months = ct.get_python_time()
    return render_template('index.html', rand=ct.rand_name[rand_name],
                             css=ct.csss[rand_css],
                            years=years,
                            months=months), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0')