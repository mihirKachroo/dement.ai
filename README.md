# alz.vision

## Inspiration
Nearly 3 million people in the US alone fall victim to memory impairments such as dementia and Alzheimer's. We personally have met people who struggle with Alzheimer's and have forgotten critical information and cherished memories, even going as far as forgetting a loved one.
Nowadays, when doctors diagnose patients, they don't personally know the person and have never met them before. They rely on mental tests and interviewing the family members. They don't have any real, concrete historical data their memories or any data on their decline of their memory. We hope to provide a data-analysis tool, structured as a fun game, for doctors to better get an idea of each patient.

## What it does
Our app is a game that hopes to provide doctors with data on users to help them better diagnose Alzheimer's. The user can upload photos and videos to the application. For each photo and video, the user will write a one-sentence description of the event portrayed. The user will also be prompted to later (after days, weeks, months, or even years) re-write the description. Our algorithm will rate (from 0-1) the description to how similar the new sentence is to the original sentence. Each of these scores are plotted on a time (number of days) x accuracy graph. With each memory, a linear or non-linear regression is performed (based on which produces the biggest R^2). The weights are then extracted (slope, y-intercept, and other factors) and an Isolation Forest outlier detection is performed. In the end, the algorithm will provides graphs and visual aids to show a user's memory decline. In addition, it will search for any potential outliers in their memory loss and common keywords associated with those outliers.

## How we built it
We built our game with a mobile app and a website for the front end, a Flask API to allow us to access the machine learning models, and a MongoDB Atlas for the backend. We built the app using React Native, and we built the website using HTML/CSS/JS and Flask. For the machine learning in the analysis, we used StringMatcher and SequenceMatcher to rate each sentence and regressions and Isolation Forest to find outliers, and the charts were made using matplotlib.pyplot. Then, we used MongoDB Atlas to store each user's memories and descriptions that our front ends could use.

## Challenges we ran into
For both the outlier detection and the sentence similarity scores, we tested a few models before reaching our final decision on the model which worked best. It was our first time using MongoDB Atlas and mongod, so it took some time to learn about the API. It was also a little difficult to work together online, but we used Discord as our platform and was sure to periodically check-in on each other.

## Accomplishments that we're proud of
We're really proud of how our idea has turned into an MVP. Our project is an idea we wanted to release to help patients around the world. We researched Alzheimer's till we had a thorough understanding of the disease and then we formulated our idea around it. We're really proud of how we've made our MVP and now we can get feedback from doctors and patients to improve our idea and eventually launch it to help others.

## What we learned
First, from a non-technical standpoint, our team learned a lot about Alzheimer's. We spent two weeks researching the disease to learn more about how it is diagnose and listening to real user stories. From a technical standpoint, two of our teammates learned how to use React Native and all our teammates learned MongoDB Atlas.

## What's next
We hope to share our app with local doctors to get their feedback on our game. We will adjust accordingly and then continue the design process to create a finished product. Then, we will pitch this product to local hospitals and clinics and hopefully collaborate with them to make this product a tool for all physicians to diagnose Dementia and Alzheimer's better.
