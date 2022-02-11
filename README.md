# Tech-Blog

## https://quiet-coast-84913.herokuapp.com



This is a full stack note taking app that uses express.js running on Node to store notes on the backend server using POST and GET. The front end uses Bootstrap CSS framework utilizing Bootswatch for theming.

##

- Math.random() is used to generate a 4 digit base16 ID for each note.

`Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);`
- All of the routing is handled by the backend server

`app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});`
- Persistant data is stored in JSON format.

`  fs.writeFile("./db/db.json", JSON.stringify(db, null, 2), (err) => err ? console.error(err) : console.log("success"));`


<img width="1325" alt="Screen Shot 2022-02-10 at 10 00 40 PM" src="https://user-images.githubusercontent.com/1414728/153544377-9d5ae8af-0c80-48fc-9764-f19aad4e5c2a.png">

## Deployed link

https://quiet-coast-84913.herokuapp.com


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [node.js](https://nodejs.dev) 
* [express.js](http://expressjs.com)


## Authors

Garrett Corbin

- [https://github.com/antieatingactivist/](https://github.com/)
- [https://www.linkedin.com/in/garrett-corbin-7a7777227/](https://www.linkedin.com/)

## License

This project is licensed under The MIT license
