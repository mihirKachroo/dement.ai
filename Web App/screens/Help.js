import React, { Component } from "react";
import Faq from "react-faq-component";
 
const data = {
    title: "Frequently Asked Questifons",
    rows: [
        {
            title: "What Was Your Inspiration For Making Obsidion?",
            content: `78% of the north american population live paycheck to paycheck and have very poor money management skills. We wanted to create a tool for the average joe that will enable them to be in control of their finances and be able to achieve financial freedom.`,
        },
        {
            title: "What Does Obsidion Do?",
            content:
                "The app can track all kinds of finance related stuff ranging from transaction, expenses, income, investments, credit history etc. The app will be able to sync all that data from the user's bank. It also has a feature that uses machine learning to track spending habits of the user and prompts them necessary money management tips. There's also a section called 'Did you know' which includes fundamental finance information regarding many things that the user might have not known. This will help the user be more familiar with the commonly used terms and money management rules.",
        },
        {
            title: "How We Built Obsidion",
            content: `For the back-end, We first created a REST API using express and mongoDb. For the mobile app, we used react native and some other packages such as bootstrap etc. We created the analytics of user data using python and flask, to track their spending habits. For the did you know section, we used Uipath to webscrape information regarding finance fundamentals`,
        },
        
        {
            title: "Challenges We Ran Into",
            content: "Setting up the rest API was a bit of a challenge since we had to make sure the user data is secure and the login and authentication routes are protected. It also a challenge to make the schema of the database the same as the input data from the app.",
        },
        {
          title: "What Is Next For Obsidion",
          content: `We hope to partner with all the major banks so that we can personalize the user experience of the app further. We also plan on using a freemium model for obsidion. So the basic functionality of the app will be free but there will be subscription model for users who would like to have the premium services such as analytics of spending habits, money management tips etc. The main source of revenue will be advertisements on the free version of the app.`,
      },
    ],
};
 
const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "dark blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};
 
export default class App extends Component {
    render() {
        return (
          
            <div>
                <Faq data={data} styles={styles} />
            </div>
        );
    }
}