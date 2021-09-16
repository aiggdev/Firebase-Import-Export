// Imports
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
    console.log('The Database is ready');
    
    // this is just the included json file - replace with your data
    await firestoreService.restore('./btc-twitter.json');
    console.log('Your Json Uploaded! Success!');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
