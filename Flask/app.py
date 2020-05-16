import pandas as pd
from flask import Flask, jsonify, request, send_file
import mainModel
import numpy as np
import matplotlib.pyplot as plt 
import sklearn
from similarity import *

# app
app = Flask(__name__)

# routes
@app.route('/', methods=['POST'])

def predict():
    # get data
    data = request.get_json(force=True)

    sent1 = "A couple are playing with a young child outside"
    sent2 = "A couple playing with a little boy on the beach"
    accuracy = main.similarity_score(sent1, sent2)

    num_data_point = np.random.randint(10, 100)
    times = [i for i in range(num_data_point)]
    acc = [0.03*i + np.random.uniform(0, 0.25) for i in range(num_data_point)]
    # acc.append(0)
    print(acc)
    i = mainModel.LinearOutlier(np.array(times), np.array(acc))
    filename = i.linear_regression()
    output = {'results': filename}
    
    # return data
    return jsonify(results=output)

#    return send_file(filename, mimetype='image/jpeg')

    
    

if __name__ == '__main__':
    app.run(port = 5000, debug=True)