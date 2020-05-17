import pandas as pd
from flask import Flask, jsonify, request, send_file, render_template, redirect
import mainModel
import numpy as np
import matplotlib.pyplot as plt 
import sklearn
import main
from pymongo import MongoClient
from werkzeug import secure_filename

# app
app = Flask(__name__)

# routes
@app.route('/')
def index():
    return render_template('index.html') 

@app.route('/', methods = ['GET', 'POST'])
def my_form():
    if request.method == "POST":
        text = request.form['text']
        memory = request.files['memory']
        if text is "":
            print("You must write a description")
        elif memory.filename == "":
            print("You must upload a photo")
        else:
            print(text)
            print(memory.filename)
        # memory.save(secure_filename(memory.filename))
        # return 'file uploaded successfully'
    return render_template('index.html')

def predict():
    # get data
    data = request.get_json(force=True)

    sent1 = "A couple are playing with a young child outside"
    sent2 = "A couple playing with a little boy on the beach"
    accuracy = main.similarity_score(sent1, sent2)

    client = MongoClient(
        'mongodb+srv://dbUser:dbUserPassword@dementia-equ16.mongodb.net/test?retryWrites=true&w=majority')

    num_data_point = np.random.randint(10, 100)
    times = [i for i in range(num_data_point)]
    acc = [0.03*i + np.random.uniform(0, 0.25) for i in range(num_data_point)]
    # acc.append(0)
    print(acc)
    i = mainModel.LinearOutlier(np.array(times), np.array(acc))
    filename = i.linear_regression()
    output = {'results': filename}

    db = client.dementia
    user = db.user0
    personDocument = {
        "sentences": [{"original_sentence": sent1, "new_sentences": [{"setence": sent2, "score": accuracy}]}],
        "results": filename
    }
    user.insert_one(personDocument)

    # print(user.find_one())
    
    # return data
    return jsonify(results=output)

#    return send_file(filename, mimetype='image/jpeg')

    
    

if __name__ == '__main__':
    app.run(port = 5000, debug=True)
