# `Spots`

Link to live site: [Spots](https://mod-four-project.onrender.com)

Spots is a clone of AirBnB, a marketplace for rentals. The front-end is built using React and manages state through Redux. The backend is made using express and sequelize.

# Technical implementation details

While I was creating the backend I noticed that I was repeating myself when checking for a record or seeing if the user had authorization for a record. To fix this issue I created two helper functions, doesExist and checkAuth. The main feature of these helper functions is they return a middlewear function, so I could invoke doesExist or checkAuth in a middlewear chain without having to write out each individual function for every route
