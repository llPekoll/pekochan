from datetime import datetime
from collections import namedtuple

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