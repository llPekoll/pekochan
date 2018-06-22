
from flask import Flask, render_template
from random import randint
# import content as ct
app = Flask(__name__)



from datetime import datetime
from collections import namedtuple

now = datetime.now()
date = now.year, now.strftime('%B'), now.strftime('%a'), str(now.today().day)


@app.route('/')
def index(name=None):
    return render_template('index.html',date=date,), 200

# if __name__ == '__main__':
#     app.run()
app.run(port=5000, debug=True)