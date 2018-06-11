from flask import Markup
from datetime import datetime
from collections import namedtuple

now = datetime.now()
Day = namedtuple('Day','year month')
pday = Day(2016,4)
years = now.year - pday.year
months = now.month - pday.month

total_year = int((years*12 + months)/12)
total_month = (years*12 + months)%12

css_dict = {'green':['highlightGreen.css','Gcv.png','Ggit.png','Gin.png'],
            'pink':['highlightPink.css','Pcv.png','Pgit.png','Pin.png'],
            'orange':['highlightOrange.css','Ocv.png','Ogit.png','Oin.png'],
            }
css =''
if now.day % 3 == 0:
    css = css_dict['green']
    
elif now.day % 2 == 0:
    css = css_dict['pink']
else:
    css = css_dict['orange']
    
about = Markup("""
            My name is <span id="different">Yohann</span>,
        <p >
            <span id="small">I use to do some 2d/3d animation.</span>
        </p>
            Now recycled in <span id="different">Python Development</span>, 
        <p>    
            <span id="small">for <span id="different">%s</span> years and <span id="different">%s</span> months now.
        </span>
        </p>
            I used to some do AR/VR, Lecturer at University,
        <p>
            <span id="small">
                    Unity/Unreal, Htc Vive, Hololens stuff,
                     Also, I won 
                <span id="different">Suzzane Award </span>
                    and special Selection to the
                <span id="different">Annecy Festival</span>.
            </span>
        </p> 
            Now Working <span id="different">Python Dev /R&D Engenier</span> at
            <a href="https://www.fixstudio.com">Fixstudio</a> 
        <p>
            <span id="small">and working for <span id="different">Addsome</span> (Python/Unity Dev), <span id="different"><a href="https://www.augment.com">Augment</a></span>(Python/ R&D Dev) before</span>
        </p>    
        <p>
            ===> <span id="different"><a href="mailto:yoyo.mepa@gmail.com?Subject=Hello from web" target="_top">contact me</a></span> .
        </p>
        """) % (total_year, total_month)

rand_name = ['Mamadou', 'La Grenouille', 'Mon Chelly', 'Thomas']

