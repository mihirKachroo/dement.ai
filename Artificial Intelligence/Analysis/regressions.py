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
        '''
        Inputs will be the times (days after the event) and the accuracy.
        '''
        self.times = times.reshape(-1, 1)
        self.accuracy = accuracy.reshape(-1, 1)
    def display(self):
        '''
        This will print out the graphs. We can modify this in the future.
        '''
        plt.show()
    def plot_points(self, show = True):
        '''
        This will plot the original data.
        '''
        plt.scatter(self.times, self.accuracy)
        plt.title('General Time-Accuracy Graph')
        plt.xlabel('Time')
        plt.ylabel('Accuracy')
        if show: self.display()
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
        print(self.linreg_r) # R-Value
    def logistic_regression(self):
        '''
        This will perform a regression for us to test.
        '''
        from sklearn.linear_model import SGDRegressor
        plt.scatter(self.times, self.accuracy)
        regressor = SGDRegressor()
        regressor.fit(self.times, self.accuracy)
        yval = regressor.predict(self.times)
        self.plot_points(False)
        plt.plot(self.times, yval, color='red', linewidth=2)
        plt.title("Logistic Regression Time-Accuracy Graph")
        self.display()
        self.logreg_r = sklearn.metrics.r2_score(self.accuracy, yval)
        print(self.logreg_r)  # R-Value
    def test_different_regressors(self):
        import sklearn.linear_model as linear_model

        options = [
            # svm.SVR(),
            # linear_model.
            linear_model.SGDRegressor(),
            linear_model.BayesianRidge(),
            linear_model.Lasso(),
            linear_model.ARDRegression(),
            linear_model.PassiveAggressiveRegressor(),
            linear_model.TheilSenRegressor(),
            linear_model.LinearRegression()
        ]

        for i in options:
            plt.scatter(self.times, self.accuracy)
            regressor = i
            regressor.fit(self.times, self.accuracy)
            yval = regressor.predict(self.times)
            self.plot_points(False)
            plt.plot(self.times, yval, color='red', linewidth=2)
            # plt.title("Logistic Regression Time-Accuracy Graph")
            # self.display()
            self.logreg_r = sklearn.metrics.r2_score(self.accuracy, yval)
            plt.title(str(i)[:10] + ": " + str(self.logreg_r))
            self.display()
    def test_svm(self):
        # from sklearn import svm
        from sklearn.neighbors import KNeighborsRegressor
        plt.scatter(self.times, self.accuracy)
        regressor = KNeighborsRegressor()
        regressor.fit(self.times, self.accuracy)
        yval = regressor.predict(self.times)
        self.plot_points(False)
        plt.plot(self.times, yval, color='red', linewidth=2)
        # plt.title("Logistic Regression Time-Accuracy Graph")
        plt.title(i)
        self.display()
        self.logreg_r = sklearn.metrics.r2_score(self.accuracy, yval)
        print(self.logreg_r)

num_data_point = np.random.randint(10, 100)       
times = [i for i in range(num_data_point)]
acc = [0.03*i*i + np.random.uniform(0, 0.25) for i in range(num_data_point)]
# acc.append(0)
i = Regression1(np.array(times), np.array(acc))
i.plot_points()
# i.linear_regression()
i.test_different_regressors()
i.test_svm()
