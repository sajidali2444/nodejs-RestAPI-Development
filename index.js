const express = require('express');
//initilize
const server = express();
// / slash is root path
//path
// call back function
//sequence of callback method paramets(request/response)
const users = [
  { id: 1, name: 'sajid' },
  { id: 2, name: 'Junaid' },
  { id: 3, name: 'Faizan' },
];

//root path get request
server.get('/', function (req, res) {
  console.log('this is the root path');
  console.log('here is the query string');
  console.log(req.query);
  res.send('you are at root path, and server is working');
});

//hello path get request
server.get('/hello', function (req, res) {
  //const headers = req.headers;
  console.log(typeof req.get('my-secret-key'));
  if (
    !req.get('my-secret-key') &&
    req.get('my-secret-key') == '1234567887654321'
  ) {
    res.send({
      message: 'Hello I am get request and I am responding result in json',
    });
  } else {
    res.send({ message: 'not allowed' });
  }
});

//user end point
//user(get all users)

server.get('/user', function (req, res, error) {
  console.log('/user endpoint');
  console.log(req.query);
  res.json({ name: 'sajid' });
  // res.send({
  //   users: [
  //     { id: 1, name: 'sajid' },
  //     { id: 2, name: 'Junaid' },
  //     { id: 3, name: 'Faizan' },
  //   ],
  // });
});
///user/123
//required parameters
/*
server.get('/user/:id/:email', function (req, res) {
  const studentId = req.params;
  console.log(studentId);
  //console.log('student id => ', studentId.id);
  const user = users.find((item) => item.id === Number(studentId.id));

  if (user !== undefined) {
    res.send({
      users: user,
    });
  } else {
    res.send({
      users: 'User not found',
    });
  }
});
*/
//id is optiona and email id required
server.get('/user/:id?/:email', function (req, res) {
  const studentId = req.params;
  console.log(studentId);
  //console.log('student id => ', studentId.id);
  const user = users.find((item) => item.id === Number(studentId.id));

  if (user !== undefined) {
    res.send({
      users: user,
    });
  } else {
    res.send({
      users: 'User not found',
    });
  }
});

// query parameters
// syntax: after path name /:parameterName1/:parameterName2/.....
// optional parameter /pathName/:parameterName?/:parameterName?
//mix optional and required: /pathName/:parameterName/:parameterName?
// how it work
// http://localhost:3000/user/1/sajidali2444@gmail.com => id=1, email=sajidali2444@gmail.com
// express will get values fron query and assign to parameter sequence wise.
//express will bind value from url to parameter in sequence 1 will be binded with id parameter
//sajidali2444@gmail.com will be binded with email parameter
// to get parameters values in endpoint use req.params
// req.params will return object of parameters
// {id:1, email:'sajidali2444@gmail.com'}
server.get('/user/:id?/:email', function (req, res) {
  const studentId = req.params;
  console.log(studentId);
  //console.log('student id => ', studentId.id);
  const user = users.find((item) => item.id === Number(studentId.id));

  if (user !== undefined) {
    res.send({
      users: user,
    });
  } else {
    res.send({
      users: 'User not found',
    });
  }
});

server.get('/getuserById', function (request, response) {
  const id = request.params;
  const query = request.query;
  //single line comment //
  //console.log('query string value');
  //console.log(query);
  //console.log('request parameter values=>');
  //console.log(request);
  //console.log('student id => ', studentId.id);
  //array method find
  // it will return first matching value else return undefind
  const user = users.find((item) => item.id === +query.userid);
  //multi line comment /**/
  /*
  console.log(request.query);
  if (query.email !== undefined && query.email !== null) {
    response.send({
      message: 'I found email from query string',
      email: query.email1,
    });
    return;
  } else {
    response.send({
      message: 'I didnt found email from query string',
    });
    return;
  }
  */

  if (user !== undefined) {
    response.send({
      users: user,
    });
  } else {
    response.send({ message: `user not found againt id ${query.userid}` });
  }
});

server.post('/getuserById', function (req, res) {
  const studentId = req.params;
  console.log('request parameter values=>');
  console.log(req.params);
  //console.log('student id => ', studentId.id);
  const user = users.find((item) => item.id === Number(studentId.id));

  if (user !== undefined) {
    res.send({
      users: user,
    });
  } else {
    res.send({
      users: 'User not found',
    });
  }
});

// server.listen(4000, () => {
//   console.log('Server is running at 4000 port');
// });
const server_port = 4000;
const runningserver = server.listen(server_port, (p) => {
  console.log(p);
});
console.log(runningserver.address());
