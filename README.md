# Node/Express/Mongoose REST API Boilerplate supporting ES6 module

Build a Restful CRUD API for a simple Note-Taking application using Node.js, Express and MongoDB.

## Requirements

- [Node and npm](http://nodejs.org)
- MongoDB: Make sure you have your own local or remote MongoDB database URI configured in `config/db.config.json`

## Steps to Setup

Clone the repository:
```sh
git clone git@github.com:jasonjin220/es6-express-rest-api-boilerplate.git
```

Set environment (vars):
```sh
cp .env.example .env
```

Install dependencies:
```sh
npm install
```

Place your own MongoDB URI in `config/db.config.json`

Run the server in dev mode:
```sh
npm run dev
```
Deployment: 
```sh
npm run build
npm start
```

View in browser at `http://localhost:3000`
