from flask import Flask, render_template, send_from_directory, jsonify, request
from pymongo import MongoClient


app = Flask(__name__)


@app.route('/')
def _home():
    return render_template('test.html')


@app.route('/submit_it', methods=["POST"])
def submit_it():
    username = request.form["fileToUpload"]
    print(username)
    print("HELLO")
    return render_template('test.html')


app.run(debug=True)

