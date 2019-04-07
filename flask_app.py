import os
from flask import Flask, render_template, Markup
from random import randint
from datetime import datetime
from collections import namedtuple


app = Flask(__name__)

now = datetime.now()

def get_python_time():
    
    Day = namedtuple('Day','year month')
    pday = Day(2016,4)
    years = now.year - pday.year
    months = now.month - pday.month

    total_year = int((years*12 + months)/12)
    total_month = int((years*12 + months)%12)
    return total_year, total_month


csss = [['highlightGreen.css','Gcv.png','Ggit.png','Gin.png','green'],
        ['highlightPink.css','Pcv.png','Pgit.png','Pin.png','pink'],
        ['highlightOrange.css','Ocv.png','Ogit.png','Oin.png','orange']]

rand_name = ['Mamadou',
            'La Grenouille',
            'Mon Chelly',
            'Thomas',
            'Theary',
            'Sisi',
            'Juju de fruit']

@app.route('/')
def index():
    rand_name = randint(0, len(rand_name)-1)
    rand_css = randint(0, len(csss)-1)
    years, months = get_python_time()
    return render_template('index.html', rand=rand_name[rand_name],
                            css=csss[rand_css],
                            years=years,
                            months=months), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)