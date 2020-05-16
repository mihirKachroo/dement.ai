import numpy as np
import matplotlib.pyplot as plt
import sklearn

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

    def display(self):
        '''
        This will print out the graphs. We can modify this in the future.
        TODO: Make this save the image.
        '''
        plt.show()

    def plot_points(self, show=True):
        '''
        This will plot the original data.
        '''
        plt.scatter(self.times, self.accuracy)
        plt.title('General Time-Accuracy Graph')
        plt.xlabel('Time')
        plt.ylabel('Accuracy')
        if show:
            self.display()

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
        self.display()
        self.linreg_r = sklearn.metrics.r2_score(self.accuracy, yval)
        # print(self.linreg_r)  # R-Value
        print(regressor.intercept_[0]) # Intercept
        print(regressor.coef_[0][0]) # Slope
    def detect_anomalies(self):
        from sklearn.ensemble import IsolationForest
        detect = IsolationForest()
        detect.fit(self.times, self.accuracy)
        print(detect.predict(self.times))
        without_outliers = [x for x, y in zip(
            self.times, detect.predict(self.times)) if (y != -1)]
        outliers = [x for x, y in zip(
            self.times, detect.predict(self.times)) if (y == -1)]
        print(without_outliers, outliers)
        # print(detect.predict)


num_data_point = np.random.randint(10, 100)
times = [i for i in range(num_data_point)]
acc = [0.03*i + np.random.uniform(0, 0.25) for i in range(num_data_point)]
# acc.append(0)
i = LinearOutlier(np.array(times), np.array(acc))
i.plot_points()
# i.linear_regression()
i.linear_regression()
i.detect_anomalies()
