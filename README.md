## Address book created with React.js

This repository has been bootstraped with create-react-app.

It uses Node.js as backend. Built with Express and Mongo. A MERN stack. 


# Instructions
## Start backend

Start MongoDB with:

```
brew services start mongodb-community 
```
alt:
```
brew services restart mongodb-community 
```

In a new terminal write: 

```
mongo
use address-book
```
Mongo is upp and running. Time to start the server! (it will start on http://localhost:8001/ )

```
cd server
nodemon index.js 
```


## Start frontend
```
cd src
npm start
```


# API documentation

http://localhost:8001/api

- /contacts - __GET__ All contacts

- /contact - __POST__ a contact
