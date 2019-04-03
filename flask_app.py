import os
from flask import Flask, render_template, Markup
from random import randint
import content as ct
app = Flask(__name__)

@app.route('/')
def index():
    rand_name = randint(0, len(ct.rand_name)-1)
    rand_css = randint(0, len(ct.csss)-1)
    years, months = ct.get_python_time()
    bio = ct.bio.replace("TOTALYEAR",str(years))
    bio = bio.replace("TOTALMONTH",str(months))
    return render_template('index.html', rand=ct.rand_name[rand_name],
                            about= Markup(bio), css=ct.csss[rand_css]), 200

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)