import pymongo 
print(pymongo.version)
from pymongo import MongoClient 
client = MongoClient(
    'mongodb+srv://dbUser:dbUserPassword@dementia-equ16.mongodb.net/test?retryWrites=true&w=majority')
db = client.dementia 
testuser = db.testuser 
personDocument = {
    "name": {"first": "Generic", "last": "User"},
    "sentences": {"This is the old sentence": {"Date": "01/01/2004", "New Sentences": [{"Sentence": "This was an old sentence", "Date": "01/05/2004", "Score": "1"}]}}
}
testuser.insert_one(personDocument)

print(testuser.find_one())