const express = require('express');
//initilize
const server = express();
// / slash is root path
//path
// call back function
//sequence of callback method paramets(request/response)
/*
const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {},
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {},
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];
*/
const usersData = () =>
  Array.from(Array(50).keys()).map((item) => ({
    id: item,
    name: 'Student ' + item,
    email: `student${item}@gmail.com`,
    marks: item * 5,
  }));

//root path get request
server.get('/', function (req, res) {
  console.log('this is the root path');
  console.log('here is the query string');
  console.log(req.query);
  const users = usersData();
  res.json({ result: users });
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
const students = [
  {
    id: 1,
    name: 'user 1',
    email: 'user1@gmail.com',
    totalMarks: 500,
    obtainMarks: 90,
  },
  {
    id: 2,
    name: 'user 2',
    email: 'user2@gmail.com',
    totalMarks: 500,
    obtainMarks: 200,
  },
  {
    id: 3,
    name: 'user 3',
    email: 'user3@gmail.com',
    totalMarks: 500,
    obtainMarks: 250,
  },
  {
    id: 4,
    name: 'user 4',
    email: 'user4@gmail.com',
    totalMarks: 500,
    obtainMarks: 400,
  },
  {
    id: 5,
    name: 'user 5',
    email: 'user5@gmail.com',
    totalMarks: 500,
    obtainMarks: 80,
  },
  {
    id: 6,
    name: 'user 6',
    email: 'user6@gmail.com',
    totalMarks: 500,
    obtainMarks: 70,
  },
  {
    id: 7,
    name: 'user 7',
    email: 'user6@gmail.com',
    totalMarks: 500,
    obtainMarks: 70,
  },
  {
    id: 8,
    name: 'user 8',
    email: 'user6@gmail.com',
    totalMarks: 500,
    obtainMarks: 70,
  },
  {
    id: 9,
    name: 'user 9',
    email: 'user6@gmail.com',
    totalMarks: 500,
    obtainMarks: 70,
  },
  {
    id: 10,
    name: 'user 10',
    email: 'user6@gmail.com',
    totalMarks: 500,
    obtainMarks: 70,
  },
  {
    id: 11,
    name: 'user 11',
    email: 'user6@gmail.com',
    totalMarks: 500,
    obtainMarks: 70,
  },
  {
    id: 12,
    name: 'user 12',
    email: 'user6@gmail.com',
    totalMarks: 500,
    obtainMarks: 70,
  },
  {
    id: 13,
    name: 'user 13',
    email: 'user6@gmail.com',
    totalMarks: 500,
    obtainMarks: 70,
  },
  {
    id: 14,
    name: 'user 14',
    email: 'user6@gmail.com',
    totalMarks: 500,
    obtainMarks: 70,
  },
  {
    id: 15,
    name: 'user 15',
    email: 'user6@gmail.com',
    totalMarks: 500,
    obtainMarks: 70,
  },
];
const user = {
  firstName: 'Sajid',
  lastName: 'Ali',
  address: 'ali garden, Faisalabad',
  mobile: '03217865510',
};
//           0 1 2 3 4
//const arr = [1,2,3,4,5,6,7,8,9,10];
//length = 9
// 9/2 = 4=0-4

server.get('/user/:id', function (req, res) {
  //here we are getting parameters value in string
  const studentId = req.params;
  console.log(studentId);
  // to convert string to number
  // Number function
  //Number.parseInt() or parsetInt()
  // short +, '2' +'2' =2
  //console.log('student id => ', studentId.id);
  const users = usersData();
  const id = parseInt(studentId.id);
  // const user = users.find((item) => item.id === id);
  // const user = users.find(getUserById);
  // for loop
  //for(/*start point/ initilization */, /*condition/end point */, /*step/skip */)
  // odd 1,3,5,7,9
  // even 2,4,6,8,10
  //            0  1   2   3   4

  //arr.push(user);
  //  console.log('arry elements length');
  // array data structure.
  // array is used to store data in sequece or in stack
  const failedStudents = [];
  const passedStudents = [];
  const loopEnd = students.length;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const even = [];
  const odd = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    //% percent sign
    // % modules operator
    // % remainder operator
    if (value % 2 === 0) {
      even.push(value);
    }
    if (value % 2 !== 0) {
      odd.push(value);
    }
    /*
    const student = students[i];
    if (student.obtainMarks < 100) {
      failedStudents.push(student);
    }
    if (student.obtainMarks >= 100) {
      passedStudents.push(student);
    }
    */
  }

  // newArr.push(1);
  // newArr.push(2);
  // newArr.push('Sajid');
  // newArr.push('faizan');

  res.send({
    result: {
      even,
      odd,
    },
  });
});

function getUserById(user) {
  console.log('student =====');
  console.log(user);
}

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
/*
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
*/

// server.listen(4000, () => {
//   console.log('Server is running at 4000 port');
// });
const server_port = 4000;
const runningserver = server.listen(server_port, (p) => {
  console.log(p);
});
console.log(runningserver.address());
