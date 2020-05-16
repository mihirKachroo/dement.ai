import numpy as np
import matplotlib.pyplot as plt 
import sklearn
import pandas as pd
import statsmodels.regression.linear_model as sm
from datetime import date, timedelta
import base64
import io

# I'm probably going to first want to do a linear regression just to find outlier. We might want to change the regression later.
# Actually, we can try to figure out which regression would work best.
# Let's use scikit learn...

# Here's what the plan is: with all the points, time x accuracy, some sort of regression that will detect general outliers.

# Regression 2: 3D regression for memory x time x accuracy. Let's go!


class LinearOutlier():
    def __init__(self, times, accuracy):
        '''
        Inputs will be the times (days after the event) and the accuracy.
        '''
        self.times = times.reshape(-1, 1)
        self.accuracy = accuracy.reshape(-1, 1)
        self.slopeintercept = []

    def display(self):
        '''
        This will print out the graphs. We can modify this in the future.
        TODO: Make this save the image.
        '''

    def plot_points(self, show=True):
        '''
        This will plot the original data.
        '''
        plt.scatter(self.times, self.accuracy)
        plt.title('General Time-Accuracy Graph')
        plt.xlabel('Time')
        plt.ylabel('Accuracy')


    def linear_regression(self):
        '''
        This will perform Linear Regression.
        '''
        from sklearn.linear_model import LinearRegression
        plt.scatter(self.times, self.accuracy)
        regressor = LinearRegression()
        regressor.fit(self.times, self.accuracy)
        yval = regressor.predict(self.times)
        self.plot_points(False)
        plt.plot(self.times, yval, color='red', linewidth=2)
        plt.title("Linear Regression Time-Accuracy Graph")
        
        pic_IObytes = io.BytesIO()
        plt.savefig(pic_IObytes,  format='png')
        pic_IObytes.seek(0)
        pic_hash = base64.b64encode(pic_IObytes.read())
        lmao=str(pic_hash)
        lmao=lmao[2:]
        lmao=lmao[:-1]
        return lmao
        

    def detect_anomalies(self):
        from sklearn.ensemble import IsolationForest
        detect = IsolationForest()
        detect.fit(self.slopeintercept)
        print(detect.predict(self.slopeintercept))
        without_outliers = [x for x, y in zip(
            self.slopeintercept, detect.predict(self.slopeintercept)) if (y != -1)]
        outliers = [x for x, y in zip(
            self.slopeintercept, detect.predict(self.slopeintercept)) if (y == -1)]
        # print(detect.predict)
