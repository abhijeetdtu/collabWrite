from flask import Flask,render_template
application = Flask(__name__ , template_folder="Frontend/Templates")

@application.route("/")
def Landing():
    return render_template("Landing.html")

if __name__ == "__main__":
    application.run()
