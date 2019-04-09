import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDNKSFRfM8gtfjtnOp7lTo9S1-3zygbRlk",
    authDomain: "expensify-2f4a4.firebaseapp.com",
    databaseURL: "https://expensify-2f4a4.firebaseio.com",
    projectId: "expensify-2f4a4",
    storageBucket: "expensify-2f4a4.appspot.com",
    messagingSenderId: "904112191939"
  };

  firebase.initializeApp(config);

  
  const database = firebase.database();

  export { firebase, database as default };



/*
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log('CHILD_REMOVED');
  console.log(snapshot.key);
  console.log(snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
  console.log('CHILD_CHANGED');
  console.log(snapshot.key);
  console.log(snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
  console.log('CHILD_ADDED');
  console.log(snapshot.key);
  console.log(snapshot.val());
});

/*
database.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((child) => {
    expenses.push({
      id: child.key,
      ...child.val()
    });
  });

  console.log(expenses);  
});



database.ref('expenses').once('value')
        .then((snapshot) => {
          const expenses = [];
          snapshot.forEach((child) => {
            expenses.push({
              id: child.key,
              ...child.val()
            });
          });

          console.log(expenses);
        })
        .catch((err) => {
          console.log("ERR: ",err);
        });
*/
/*
database.ref('expenses').push({
  'description': 'Rent',
  note: '',
  amount: 109500,
  createdAt: 9763495345
});

database.ref('expenses').push({
  'description': 'Phone Bill',
  note: '',
  amount: 6000,
  createdAt: 456945869
});

database.ref('expenses').push({
  'description': 'Food',
  note: '',
  amount: 13456,
  createdAt: 856784357689456
});
*/
  /*
  database.ref('notes/-Lbxrw4b5Q34oeu2UUJ8').update({
      body: 'BODYYY'  
  });

  database.ref('notes/-Lbxrw4b5Q34oeu2UUJ8').remove();
  database.ref().push();
  */

  /*
  database.ref('notes').push(
    {
      title: 'Course Topics',
      body: 'React Native, Angular'
    }
  );
*/
// ARRAYS FIREBASE DATABASE
/*
const firebaseNotes = {
  notes: {
    asdasdasd: {
      title: 'First note',
      body: 'First'   
    },
    kjkhfjgkhjf: {
      title: 'Second note',
      body: 'Second'  
    }
  }
}


const notes = [
  {
  id: '1523452',
  title: 'First note',
  body: 'first'
  },
  {
    id: '12123',
    title: 'First note',
    body: 'first'
  }
];


database.ref('notes').set(notes);
*/

// ON DATABSE ACTION RETURNS PROMISE THAT RETURNS NEW DATABASE

//   const onValueChange = database.ref().on('value', (snapshot) => {
//       console.log(snapshot.val());
//   }, (err) => {
//       console.log("Error: ", err);
//   });


//   setTimeout(() => {
//     database.ref('age').set(20);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off('value', onValueChange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(22);
//   }, 10500);
   // ADDING TO DATABASE
//   database.ref().set({
//       name: 'Pela 747',
//       age: '21',
//       job: 'Software developer',
//       isSingle: true,
//       location: {
//           city: 'Belgrade',
//           country: 'Serbia'
//       },
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((err) => {
//       console.log("Error: ", err);
//   });

//   database.ref().set('This is my data');

//   database.ref('age').set(22);

//   database.ref('location/city').set('Pancevo');


//   database.ref('attributes').set({
//       height: 182,
//       width: 50
//   }).then(() => {
//       console.log('Data is saved second time')
//   }).catch((err) => {
//       console.log("Err: ", err);
//   });
  

// REMOVING
//   database.ref('isSingle').remove().then(() => {
//     console.log("Data was removed");
//   }).catch((err) => {
//       console.log('Err: ', err);
//   });

//   database.ref('isSingle').set(null);

// UPDATING
// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Pancevo'
// });

// FETCH DATABASE
/*
database.ref().once('value').then((snapshot) => {
    const val = snapshot.val()
    console.log(val);
});
*/