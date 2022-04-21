import sys 
sys.path.insert(0, '/var/www/GrabTik')

activate_this = '/root/.local/share/virtualenvs/GrabTik-c4EcdRU_/bin/activate_this.py'
with open(activate_this) as file_:
    exect(file_.read(), dict(__file__=activate_this))

from server import app as application