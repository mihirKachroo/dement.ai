import numpy as np
import matplotlib.pyplot as plt 
import sklearn

# I'm probably going to first want to do a linear regression just to find outlier. We might want to change the regression later.
# Actually, we can try to figure out which regression would work best.
# Let's use scikit learn...

# Here's what the plan is: with all the points, time x accuracy, some sort of regression that will detect general outliers.

# Regression 2: 3D regression for memory x time x accuracy. Let's go!

class Regression1():
    def __init__(self, times, accuracy):
        self.times = times.reshape(-1, 1)
        self.accuracy = accuracy.reshape(-1, 1)
    def display(self):
        plt.show()
    def plot_points(self, show = True):
        plt.scatter(self.times, self.accuracy)
        plt.title('General Time-Accuracy Graph')
        plt.xlabel('Time')
        plt.ylabel('Accuracy')
        if show: self.display()
    def linear_regression(self):
        from sklearn.linear_model import LinearRegression
        plt.scatter(self.times, self.accuracy)
        regressor = LinearRegression()
        regressor.fit(self.times, self.accuracy)
        yval = regressor.predict(self.times)
        self.plot_points(False) 
        plt.plot(self.times, yval, color='red', linewidth=2)
        plt.title("Linear Regression Time-Accuracy Graph")
        self.display()
        self.linreg_r = sklearn.metrics.r2_score(self.accuracy, yval)
        print(self.linreg_r)

num_data_point = np.random.randint(10, 100)       
times = [i for i in range(num_data_point)]
acc = [0.03*i+np.random.uniform()/2 for i in range(num_data_point)]
i = Regression1(np.array(times), np.array(acc))
i.plot_points()
i.linear_regression()
