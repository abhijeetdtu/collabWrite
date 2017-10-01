
from flask import Flask
from flask import render_template

app = Flask(__name__ ,  template_folder="Frontend/Templates")

@app.route('/land')
def Land():
    return  render_template('Landing.html')


if __name__ == '__main__':
	app.debug = True
	app.run()