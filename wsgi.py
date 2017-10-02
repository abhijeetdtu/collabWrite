import os
from flask import Flask,render_template
from urllib import quote_plus
application = Flask(__name__ , static_folder = "Frontend/Statics" , template_folder="Frontend/Templates")


if('MONGODB_USER' in os.environ):
	username = os.environ['MONGODB_USER']
	password = os.environ['MONGODB_PASSWORD']
else:
	username , password = open("credLoad.txt").read().split("\n")

application.config['MONGO_URI'] = 'mongodb://%s:%s@%s' % ( quote_plus(username) , quote_plus(password) ,'127.0.0.1:27017')

@application.route("/")
def Landing():
    return render_template("Landing.html")


@application.route('/Views/<path:path>', methods=['GET', 'POST'])
def Views(path):
    print(path ,"/Views/{}".format(path) ) 
    return render_template("/Views/{}".format(path))


if __name__ == "__main__":
	application.debug = True
	application.run()
