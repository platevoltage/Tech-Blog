# Tech-Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## https://guarded-springs-42532.herokuapp.com



This is a full stack blog website that supports multiple users. Users can view comment on other user's posts. The dashboard allows for content creation and deletion.

##

- Model View Controller (MVC) structure is used with Handlebars.

`const exphbs = require('express-handlebars');`
- Express Router is used for all API routes
```
const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
```

- App is deployed on Heroku using JawsDB for the database.

`if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
}`


<img width="1325" alt="Screen Shot 2022-02-10 at 10 00 40 PM" src="https://user-images.githubusercontent.com/1414728/153544377-9d5ae8af-0c80-48fc-9764-f19aad4e5c2a.png">

## Deployed link

https://guarded-springs-42532.herokuapp.com


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [node.js](https://nodejs.dev) 
* [express.js](http://expressjs.com)
* [sequelize](https://sequelize.org)
* [mySQL](https://www.mysql.com)

## Authors

Garrett Corbin

- [https://github.com/platevoltage/](https://github.com/)
- [https://www.linkedin.com/in/garrett-corbin-7a7777227/](https://www.linkedin.com/)

## License

This project is licensed under The MIT license
