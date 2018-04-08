/*
1. As an authenticated user, I can keep my polls and come back later to access them.
2. As an authenticated user, I can share my polls with my friends.
3. As an authenticated user, I can see the aggregate results of my polls.
4. User Story: As an authenticated user, I can delete polls that I decide I don't want anymore.
5. As an authenticated user, I can create a poll with any number of possible items.
6. As an unauthenticated or authenticated user, I can see and vote on everyone's polls.
7. As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
8. As an authenticated user, if I don't like the options on a poll, I can create a new option.

Authenticate with: Github
Ability to: log in, log out, create poll, delete poll, vote, see results
logged in: create poll, delete poll, vote, see results
not logged in: vote, see results

Assets
Home Page: Login, logout if logged in, list of polls, my polls, create new poll, (thiers has a dropdown with name and ability to log out)

*/

const express = require('express');
const app = express();

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
